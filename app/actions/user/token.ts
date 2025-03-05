"use server";
import { IToken } from "@/types/userTypes";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export const generateToken = async ({
  name,
  id,
}: IToken): Promise<{ userToken: string }> => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not found in .env");
  }
  const userToken = await jwt.sign({ name, id }, process.env.JWT_SECRET);

  return { userToken };
};

export const openToken = async (token: string): Promise<IToken> => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not found in .env");
  }
  const { name, id } = await jwtDecode<IToken>(token);

  return { name, id };
};
