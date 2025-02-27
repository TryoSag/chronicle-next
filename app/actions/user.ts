"use server";
import prisma from "@/lib/prisma";
import { IUserRegister } from "@/types/userTypes";

export const createUser = async ({ name, email, pass }: IUserRegister) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (user) return; //feedback user already exists

  //encript pass

  return prisma.user.create({
    data: {
      name: name || "Secret User",
      email,
      pass,
    },
  });
};
