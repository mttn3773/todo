import { WatchQueryOptions } from "@apollo/client";
import React, { useRef } from "react";
import {
  Exact,
  TodosQuery,
  useCreateTodoMutation,
  useMeQuery,
} from "src/generated/graphql";

interface CreateTodoProps {
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

export const CreateTodo: React.FC<CreateTodoProps> = ({ update }) => {
  const [createTodo, { data, loading }] = useCreateTodoMutation();
  const { data: meData } = useMeQuery();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (loading) return;
    if (!meData?.me?.id) return;
    if (e.key === "Enter") {
      const newTodo = await createTodo({
        variables: {
          body: inputRef.current?.value || "",
          userId: meData?.me?.id,
        },
      });
      update(({ todos }) => {
        return { todos: { ...todos, newTodo } };
      });
    }
  };
  return (
    <div className="">
      <input onKeyPress={(e) => handleKeyPress(e)} ref={inputRef} type="text" />
    </div>
  );
};

export default CreateTodo;
