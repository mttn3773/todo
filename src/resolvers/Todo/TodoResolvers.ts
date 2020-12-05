import { FieldResolver, mutationType, queryType } from "@nexus/schema";

export const checkCompleted: FieldResolver<"Mutation", "check"> = async (
  _root,
  { id },
  { prisma, userId }
) => {
  if (!id) return false;
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo || todo.userId !== userId) return false;
  const isComleted = todo.completed;
  await prisma.todo.update({
    data: { completed: { set: !isComleted } },
    where: { id },
  });
  return true;
};
