"use client";
import { JSX } from "react";
import { IChronicle } from "../../types/chroniclesTypes";
import Chronicle from "../Chronicle/Chronicle";
import ButtonPlusMinus from "../ButtonPlusMinus/ButtonPlusMinus";

const ChronclesList = (): JSX.Element => {
  const chronicles: IChronicle[] = [];

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
      </ul>
      <ButtonPlusMinus action={newChronicle} symbol="plus" />
    </main>
  );
};

export default ChronclesList;
