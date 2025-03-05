"use client";
import { JSX, useEffect, useState } from "react";
import { IChronicle } from "../../types/chroniclesTypes";
import Chronicle from "./Chronicle/Chronicle";
import ButtonPlusMinus from "../ButtonPlusMinus/ButtonPlusMinus";
import { tokenName } from "@/constants/components";
import { openToken } from "@/app/actions/user/token";
import { toast } from "react-toastify";

const ChronclesList = (): JSX.Element => {
  const [chronicles, setChronicles] = useState<IChronicle[]>([]);

  const getChronicles = async (): Promise<void> => {
    const token: string | null = await localStorage.getItem(tokenName);
    if (token) {
      const { name, id } = await openToken(token);
    }
    toast.error("You are not logged in");
  };

  useEffect(() => {
    getChronicles();
  }, []);

  const newChronicle = (): void => {};

  return (
    <main className="container-chronicleList">
      <ul>
        {chronicles.map(({ chronicleName, chronicleId }) => (
          <Chronicle
            chronicleName={chronicleName}
            chronicleId={chronicleId}
            key={chronicleId}
          />
        ))}
        <li key={"addChronicle"}>
          <ButtonPlusMinus action={newChronicle} symbol="plus" />
        </li>
      </ul>
    </main>
  );
};

export default ChronclesList;
