import { ErrorField } from "./../src/generated/graphql";
export const toErrorMap = ({ field, message }: ErrorField) => {
  const foramtedError: Record<string, string> = {};
  foramtedError[field!] = message!;
  return foramtedError;
};
