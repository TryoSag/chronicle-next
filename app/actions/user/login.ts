"use server";
import prisma from "@/lib/prisma";
import { IUserLogin } from "@/types/userTypes";
import bcrypt from "bcryptjs";

const login = async ({ email, pass }: IUserLogin) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user)
      return {
        status: false,
        message: "User not found",
        data: { id: 0, name: "" },
      };

    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch)
      return {
        status: false,
        message: "Invalid password",
        data: { id: 0, name: "" },
      };

    return {
      status: true,
      message: "",
      data: { id: user.id, name: user.name },
    };
  } catch (e) {
    return {
      status: false,
      message: "Error in the database connection",
      data: { errorMessage: (e as Error).message, id: 0, name: "" },
    };
  }
};

export default login;
