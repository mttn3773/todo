import createContext from "src/context";
import { ApolloServer } from "apollo-server-micro";
import { schema } from "src/schema";

const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: !(process.env.NODE_ENV === "production"),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = server.createHandler({
  path: "/api/graphql",
});
export default handler;
