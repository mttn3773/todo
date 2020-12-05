import { mutationType } from "@nexus/schema";
import { checkCompleted } from "./Todo/TodoResolvers";
import { login, logout, register } from "./User/UserResolvers";
import { UserInput } from "./User/UserTypes";

export const Mutation = mutationType({
  description: "Mutations for user model",
  definition(t) {
    //   User Mutations
    t.crud.deleteManyUser();
    t.crud.deleteOneUser();
    t.field("register", {
      type: "UserResponse",
      args: UserInput,
      resolve: register,
    });
    t.field("login", {
      type: "UserResponse",
      description: "Login user mutation",
      args: UserInput,
      resolve: login,
    });
    t.field("logout", {
      type: "Boolean",
      description: "Log user out",
      authorize: (_root, _args, { userId }) => (userId ? true : false),
      resolve: logout,
    });
    // Todo Mutations
    t.crud.createOneTodo();
    t.crud.deleteOneTodo();
    t.crud.deleteManyTodo();
    t.field("check", {
      type: "Boolean",
      args: {
        id: "Int",
      },
      resolve: checkCompleted,
    });
  },
});
