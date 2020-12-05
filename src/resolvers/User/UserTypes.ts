import { inputObjectType, nonNull, objectType, stringArg } from "@nexus/schema";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.username();
    t.model.id();
    t.model.password();
    t.model.todoId();
    t.model.todos();
    t.model.password();
    t.nullable.string("token");
    t.model.count();
  },
});

export const UserResponse = objectType({
  name: "UserResponse",
  description:
    "Response for user queryes and mutations. Includes error responses",
  definition(t) {
    t.nullable.field("user", { type: "User" });
    t.nullable.field("error", { type: "ErrorField" });
  },
});

export const UserInput = {
  username: nonNull(stringArg()),
  password: nonNull(stringArg()),
};

export const ErrorField = objectType({
  name: "ErrorField",
  definition(t) {
    t.string("field");
    t.string("message");
  },
});
