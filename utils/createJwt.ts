import jwt from "jsonwebtoken";
import { TokenPayload } from "src/context";

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export const createJwt = (payload: TokenPayload): ITokens => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "14d",
  });

  return { accessToken, refreshToken };
};
