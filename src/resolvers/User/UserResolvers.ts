import { destroyCookies } from "./../../../utils/setCookie";
import { FieldResolver } from "@nexus/schema";
import { hash, verify } from "argon2";
import { User } from "src/generated/graphql";
import { setCookies } from "utils/setCookie";
import { createJwt } from "./../../../utils/createJwt";
import {} from "cookie";

// REGISTER RESOLVER
export const register:
  | FieldResolver<"Mutation", "register">
  | undefined = async (_root, { username, password }, { prisma }) => {
  if (password.length < 6) {
    return {
      error: {
        field: "password",
        message: "Password should contain at least 6 symbols",
      },
    };
  }
  const user = await prisma.user.findUnique({ where: { username } });
  if (user) {
    return {
      error: {
        field: "username",
        message: "Username is already taken",
      },
    };
  }
  const hashedPassword = await hash(password);
  const res = await prisma.user.create({
    data: { username, password: hashedPassword },
  });
  return { user: res };
};

// LOGIN RESOLVER

export const login: FieldResolver<"Mutation", "login"> | undefined = async (
  root,
  { password, username },
  { prisma, req, res }
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
      include: { todos: true },
    });
    if (!user) {
      return {
        error: {
          field: "username",
          message: "wrong username",
        },
      };
    }
    const isValid = await verify(user.password, password);
    if (!isValid) {
      return {
        error: {
          field: "password",
          message: "wrong password",
        },
      };
    }

    const { accessToken, refreshToken } = createJwt({
      id: user.id,
      username: user.username,
      count: user.count,
    });

    const userWithToken: User = {
      ...user,
      token: accessToken,
    };
    setCookies(res, { accessToken, refreshToken });
    return { user: userWithToken };
  } catch (e) {
    return {
      error: {
        field: "undefiened",
        message: e.message,
      },
    };
  }
};

// Me

export const me: FieldResolver<"Query", "me"> = (
  _root,
  _args,
  { prisma, req, userId }
) => {
  if (!userId) {
    return null;
  }
  return prisma.user.findUnique({ where: { id: userId } });
};

// LOGOUT

export const logout: FieldResolver<"Mutation", "logout"> = (
  _root,
  _args,
  { res }
) => {
  try {
    destroyCookies(res, { accessToken: "", refreshToken: "" });
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
};
