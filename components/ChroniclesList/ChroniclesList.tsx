"use client";
import { JSX, useEffect, useState } from "react";
import { IChronicle } from "../../types/chroniclesTypes";
import Chronicle from "./Chronicle/Chronicle";
import ButtonPlusMinus from "../ButtonPlusMinus/ButtonPlusMinus";
import { openToken } from "@/app/actions/user/token";
import { getUserChrnonicles } from "@/app/actions/chronicle/chronicle";
import { toast } from "react-toastify";

const ChronclesList = (): JSX.Element => {
  const [chronicles, setChronicles] = useState<IChronicle[]>([]);

  const getChronicles = async (): Promise<void> => {
    const { id } = await openToken();
    const { status, message, data } = await getUserChrnonicles(id);
    if (status) setChronicles(data);
    toast(message);
  };

  useEffect(() => {
    getChronicles();
  }, []);

  const newChronicle = (): void => {};

  return (
    <main className="container-chronicleList">
      <ul>
        {chronicles.map(({ name, id }) => (
          <Chronicle chronicleName={name} chronicleId={id} key={`${id}`} />
        ))}
        <li key={"addChronicle"}>
          <ButtonPlusMinus action={newChronicle} symbol="plus" />
        </li>
      </ul>
    </main>
  );
};

export default ChronclesList;
