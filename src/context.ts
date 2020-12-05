import { createJwt } from "./../utils/createJwt";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { setCookies } from "utils/setCookie";

const prisma = new PrismaClient({ log: ["query", "info", "error", "warn"] });

export interface Context {
  prisma: PrismaClient;
  req: NextApiRequest;
  res: NextApiResponse;
  userId?: number;
}

export interface TokenPayload {
  id: number;
  username: string;
  count: number;
}

export default async function createContext({ req, res }: Context) {
  if (!req.headers.cookie) return { req, res, prisma }; // No cookies
  const parsedCookie = parse(req.headers.cookie);
  const accessToken = parsedCookie["accessToken"];
  const refreshToken = parsedCookie["refreshToken"];
  // Trying to verify access token if both tokens exist
  try {
    if (!refreshToken && !accessToken) return { req, res, prisma };
    const data: TokenPayload = verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET!
    ) as TokenPayload;

    return { req, res, prisma, userId: data.id };
  } catch {}

  // Access token doesnt exists

  if (!refreshToken) return { req, res, prisma }; // Refresh token doesnt exists
  let data: TokenPayload;
  try {
    data = verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!
    ) as TokenPayload;
  } catch {
    return { req, res, prisma }; // Refresh token is not valid
  }

  const user = await prisma.user.findUnique({ where: { id: data.id } });
  if (!user || user?.count !== data.count) {
    return { req, res, prisma }; // Token has been invalidated or user doesnt exists
  }
  // Create New Tokens
  const {
    accessToken: newAccessToken,
    refreshToken: newRefreshTOken,
  } = createJwt({
    id: user.id,
    count: user.count,
    username: user.username,
  });
  // Set new Tokens
  setCookies(res, {
    accessToken: newAccessToken,
    refreshToken: newRefreshTOken,
  });
  return { req, res, prisma, userId: user.id };
}
