import CreateTodo from "components/CreateTodo";
import TodoBody from "components/TodoBody";
import { NextPage } from "next";
import React, { useContext, useEffect } from "react";
import { useMeQuery, useTodosQuery } from "src/generated/graphql";
import { Context } from "store/globalStore";

const Home: NextPage = () => {
  const { data: meData, loading: meLoading } = useMeQuery();
  const { data, loading, updateQuery } = useTodosQuery({
    skip: !meData?.me?.id || meLoading,
    variables: { userId: meData?.me?.id! },
  });
  return (
    <div className="">
      <CreateTodo update={updateQuery} />
      <div className="">
        {data?.todos.map((el) => {
          return <TodoBody key={el.id} todo={el} update={updateQuery} />;
        })}
      </div>
    </div>
  );
};

export default Home;
