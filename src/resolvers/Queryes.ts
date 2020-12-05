import { me } from "./User/UserResolvers";
import { queryType } from "@nexus/schema";

export const Query = queryType({
  description: "Queryes for user model",
  definition(t) {
    // USER QUERYS

    t.crud.user();
    t.crud.users({ pagination: true, filtering: true });
    t.field("me", {
      type: "User",
      description: "Returns user data based on session",
      resolve: me,
    });
    // TODO QUERYES
    t.crud.todo();
    t.crud.todos({ pagination: false, filtering: true });

    // -----------------------
  },
});
