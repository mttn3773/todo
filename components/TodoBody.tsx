import { WatchQueryOptions } from "@apollo/client";
import React, { useContext } from "react";
import {
  Exact,
  MeDocument,
  Todo,
  TodosDocument,
  TodosQuery,
  useCheckMutation,
  useDeleteTodoMutation,
} from "src/generated/graphql";
import { Context } from "store/globalStore";

interface TodoBodyProps {
  todo: Todo;
  update: <
    TVars = Exact<{
      userId: number;
    }>
  >(
    mapFn: (
      previousQueryResult: TodosQuery,
      options: Pick<WatchQueryOptions<TVars, TodosQuery>, "variables">
    ) => TodosQuery
  ) => void;
}

export const TodoBody: React.FC<TodoBodyProps> = ({ todo, update }) => {
  const [del, { loading }] = useDeleteTodoMutation();
  const [check, {}] = useCheckMutation();
  const { dispatch } = useContext(Context);
  return (
    <div className="todo-body">
      <p style={todo.completed ? { textDecoration: "line-through" } : {}}>
        {todo.body}
      </p>
      <button
        disabled={loading}
        onClick={async () => {
          await del({
            variables: { id: todo.id },
          });
          update(({ todos }) => {
            return { todos: todos.filter((el) => !(el.id === todo.id)) };
          });
          dispatch({
            type: "NOTIFY",
            payload: { success: "You've deleted todo" },
          });
        }}
      >
        X
      </button>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={async (e) => {
          await check({ variables: { id: todo.id } });
          update(({ todos }) => {
            const todos_: Todo[] = [];
            for (let i = 0; i < todos.length; i++) {
              if (todos[i].id === todo.id) {
                todos_.push({ ...todos[i], completed: !todos[i].completed });
              } else {
                todos_.push(todos[i]);
              }
            }
            return { todos: todos_ };
          });
          dispatch({
            type: "NOTIFY",
            payload: { success: "You've updated todo" },
          });
        }}
      />
    </div>
  );
};

export default TodoBody;
