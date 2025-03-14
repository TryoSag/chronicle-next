import prisma from "@/lib/prisma";
import { IChronicle, ICreateChronicle } from "@/types/chroniclesTypes";

type errorResponse = {
  status: false;
  message: string;
  data: string;
};

type correctResponse = { status: true; message: string };

export type responseGetUserChronicles =
  | {
      status: true;
      message: string;
      data: IChronicle[];
    }
  | errorResponse;

export type responseCreateChronicle = correctResponse | errorResponse;

export type responseDeleteChronicle = correctResponse | errorResponse;

export const getUserChrnonicles = async (
  userId: number
): Promise<responseGetUserChronicles> => {
  try {
    const userChronicles: IChronicle[] = await prisma.chronicle.findMany({
      where: {
        userId,
      },
    });
    return { status: true, message: "Your chronicles", data: userChronicles };
  } catch (e) {
    return {
      status: false,
      message: "Error in the database",
      data: (e as Error).message,
    };
  }
};

export const createChronicle = async (
  newChronicle: ICreateChronicle
): Promise<responseCreateChronicle> => {
  try {
    const createdChronicle = await prisma.chronicle.create({
      data: newChronicle,
    });
    if (!createdChronicle) {
      return {
        status: false,
        message: "Error creating the chronicle",
        data: "",
      };
    }
    return { status: true, message: "Chronicle created" };
  } catch (e) {
    return {
      status: false,
      message: "Error in the database",
      data: (e as Error).message,
    };
  }
};

export const deleteChronicle = async (
  chronicleId: number
): Promise<responseDeleteChronicle> => {
  try {
    await prisma.chronicleTag.deleteMany({
      where: { chronicleId: chronicleId },
    });

    await prisma.chronicle.delete({
      where: {
        id: chronicleId,
      },
    });
    return { status: true, message: "Chronicle deleted" };
  } catch (e) {
    return {
      status: false,
      message: "Error in the database",
      data: (e as Error).message,
    };
  }
};
