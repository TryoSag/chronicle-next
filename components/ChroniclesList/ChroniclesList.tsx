"use client";
import { JSX, useEffect, useRef, useState } from "react";
import { IChronicle } from "../../types/chroniclesTypes";
import Chronicle from "./Chronicle/Chronicle";
import ButtonPlusMinus from "../ButtonPlusMinus/ButtonPlusMinus";
import { openToken } from "@/app/actions/user/token";
import { getUserChrnonicles } from "@/app/actions/chronicle/chronicle";
import { toast } from "react-toastify";
import Modal from "../Modal/Modal";
import CreateChronicleForm from "./CreateChronicleForm/CreateChronicleForm";

const ChronclesList = (): JSX.Element => {
  const [chronicles, setChronicles] = useState<IChronicle[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const userId = useRef<number>(0);

  const getChronicles = async (): Promise<void> => {
    const { id } = await openToken();
    userId.current = id;
    const { status, message, data } = await getUserChrnonicles(id);
    if (status) setChronicles(data);
    toast(message);
  };

  useEffect(() => {
    getChronicles();
  }, [openModal]);

  return (
    <main className="container-chronicleList">
      <Modal open={openModal}>
        <CreateChronicleForm
          chronicles={chronicles}
          userId={userId.current}
          setOpenModal={setOpenModal}
        />
      </Modal>
      <ul>
        {chronicles.map(({ name, id }) => (
          <Chronicle name={name} id={id} key={`${id}`} />
        ))}
        <li key={"addChronicle"}>
          <ButtonPlusMinus action={() => setOpenModal(true)} symbol="plus" />
        </li>
      </ul>
    </main>
  );
};

export default ChronclesList;
