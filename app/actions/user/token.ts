"use server";
import { tokenName } from "@/constants/components";
import prisma from "@/lib/prisma";
import { IToken } from "@/types/userTypes";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export const generateToken = async ({
  name,
  id,
}: IToken): Promise<{ userToken: string }> => {
  const userToken = await jwt.sign({ name, id }, process.env.JWT_SECRET!);

  return { userToken };
};

export const checkToken = async (token: string): Promise<boolean> => {
  try {
    await jwt.verify(token, process.env.JWT_SECRET!);
    const { id } = await jwtDecode<IToken>(token);
    const userOnDb = await prisma.user.findUnique({
      where: { id },
    });
    if (userOnDb) return true;
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const openToken = async (): Promise<IToken> => {
  const token: string | null = await localStorage.getItem(tokenName);
  const { name, id } = await jwtDecode<IToken>(token!);

  return { name, id };
};
