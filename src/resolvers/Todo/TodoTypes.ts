import { objectType } from "@nexus/schema";

export const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.model.id();
    t.model.body();
    t.model.createdAt();
    t.model.User();
    t.model.userId();
    t.model.completed();
  },
});
