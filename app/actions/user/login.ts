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
    if (!user) return { status: false, message: "User not found" };

    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch) return { status: false, message: "Invalid password" };

    return {
      status: true,
      message: "User logged correctly",
      data: { id: user.id, name: user.name },
    };
  } catch (e) {
    return {
      status: false,
      message: "Error in the database connection",
      data: e,
    };
  }
};

export default login;
