"use server";
import { defaultName } from "@/constants/components";
import prisma from "@/lib/prisma";
import { IUserRegister } from "@/types/userTypes";
import bcrypt from "bcryptjs";

export const register = async ({ name, email, pass }: IUserRegister) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user)
      return {
        status: false,
        message: "Email already exists",
        data: { id: 0, name: "" },
      };

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(pass, salt);

    const newUser = await prisma.user.create({
      data: {
        name: name || defaultName,
        email,
        pass: hashedPass,
      },
    });
    if (!newUser)
      return {
        status: false,
        message: "Error creating user",
        data: { id: 0, name: "" },
      };
    return {
      status: true,
      message: "",
      data: { id: newUser.id, name: newUser.name },
    };
  } catch (e) {
    return {
      status: false,
      message: "Error in the database connection",
      data: { errorMessage: (e as Error).message, id: 0, name: "" },
    };
  }
};

export default register;
