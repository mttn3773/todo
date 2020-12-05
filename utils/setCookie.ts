import { NextApiResponse } from "next";
import { serialize } from "cookie";
import { ITokens } from "./createJwt";

export const setCookies = (
  res: NextApiResponse,
  { refreshToken, accessToken }: ITokens
) => {
  res.setHeader("Set-Cookie", [
    serialize("refreshToken", refreshToken, {
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: !(process.env.NODE_ENV === "development"),
    }),
    serialize("accessToken", accessToken, {
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 15,
      httpOnly: true,
      secure: !(process.env.NODE_ENV === "development"),
    }),
  ]);
};

export const destroyCookies = (
  res: NextApiResponse,
  { refreshToken, accessToken }: ITokens
) => {
  res.setHeader("Set-Cookie", [
    serialize("refreshToken", refreshToken, {
      path: "/",
      sameSite: "strict",
      maxAge: -1,
      httpOnly: true,
      secure: !(process.env.NODE_ENV === "development"),
    }),
    serialize("accessToken", accessToken, {
      path: "/",
      sameSite: "strict",
      maxAge: -1,
      httpOnly: true,
      secure: !(process.env.NODE_ENV === "development"),
    }),
  ]);
};
