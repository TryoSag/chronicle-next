import Modal from "@/components/Modal/Modal";
import { JSX, useState } from "react";
import { toast } from "react-toastify";

interface propsChronicle {
  name: string;
  id: number;
}

const Chronicle = ({ name, id }: propsChronicle): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const action = (): void => {
    window.location.href = `/tags/${id.toString()}`;
  };

  const deleteChronicle = async (): Promise<void> => {
    const { status, message } = await deleteChronicle(id);
    if (status) {
      window.location.href = "/chronicles";
    } else {
      toast.error(message);
    }
  };

  return (
    <li onClick={action} className="container-chronicle">
      <Modal open={openModal}>
        <div className="modal-chronicle-delete">
          <span>
            Are you sure you want to delete this chronicle and its tags?
          </span>
          <button onClick={deleteChronicle}>Yes</button>
          <button onClick={() => setOpenModal(false)}>No</button>
        </div>
      </Modal>
      <div className="container-chronicleDecoration">
        <span className="text-name">{name}</span>
        <button onClick={() => setOpenModal(true)}>X</button>
      </div>
    </li>
  );
};

export default Chronicle;
