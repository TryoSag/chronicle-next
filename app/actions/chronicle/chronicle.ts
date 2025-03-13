import prisma from "@/lib/prisma";
import { IChronicle } from "@/types/chroniclesTypes";

type correctResponseGetUserChronicles = {
  status: true;
  message: string;
  data: IChronicle[];
};

type errorResponse = {
  status: false;
  message: string;
  data: string;
};

type responseGetUserChronicles =
  | correctResponseGetUserChronicles
  | errorResponse;

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
