"use server";
import { IToken } from "@/types/userTypes";
import jwt from "jsonwebtoken";

const generateToken = async ({
  name,
  id,
}: IToken): Promise<{ userToken: string }> => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not found in .env");
  }
  const userToken = await jwt.sign({ name, id }, process.env.JWT_SECRET);

  return { userToken };
};

export default generateToken;
