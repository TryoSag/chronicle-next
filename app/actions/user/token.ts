"use server";
import { IToken } from "@/types/userTypes";
import jwt from "jsonwebtoken";

const token = ({ name, id }: IToken) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not found in .env");
  }
  const userToken = jwt.sign({ name, id }, process.env.JWT_SECRET);

  return { userToken };
};

export default token;
