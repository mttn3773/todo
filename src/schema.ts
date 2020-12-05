import { Mutation } from "./resolvers/Mutations";
import { Query } from "./resolvers/Queryes";
import { fieldAuthorizePlugin, makeSchema, objectType } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import path from "path";
import { UserResponse, ErrorField, User } from "./resolvers/User/UserTypes";
import { Todo } from "./resolvers/Todo/TodoTypes";

export const schema = makeSchema({
  types: { Mutation, Query, UserResponse, User, Todo, ErrorField },
  plugins: [
    nexusSchemaPrisma({ experimentalCRUD: true }),
    fieldAuthorizePlugin(),
  ],
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "nexus.ts"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      { source: require.resolve("./context"), alias: "Context" },
    ],
  },
});
