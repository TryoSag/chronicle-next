import { JSX, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { IChronicle, ICreateChronicle } from "@/types/chroniclesTypes";
import { createChronicle } from "@/app/actions/chronicle/chronicle";

type createChronicleFormProps = {
  chronicles: IChronicle[];
  setOpenModal: (value: SetStateAction<boolean>) => void;
  userId: number;
};

const CreateChronicleForm = ({
  chronicles,
  setOpenModal,
  userId,
}: createChronicleFormProps): JSX.Element => {
  const emptyNewChronicle = "";

  const [formData, setFormData] = useState(emptyNewChronicle);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData(event.target.value);
  };

  const formSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (chronicles.some((chronicle) => chronicle.name === formData)) {
      toast.error("This chronicle already exists");
    } else {
      const newChronicle: ICreateChronicle = {
        name: formData,
        userId,
      };
      const { status, message } = await createChronicle(newChronicle);
      if (status) {
        toast.success(message);
        setOpenModal(false);
      } else {
        toast.error(message);
      }
    }
  };

  return (
    <section className="container-createChronicleForm">
      <form
        className="createChronicle-form"
        autoComplete="off"
        onSubmit={formSubmit}
        noValidate
      >
        <label htmlFor="chronicleName" className="chronicleName-input">
          <input
            type="text"
            id="chronicleName"
            placeholder="Chronicle Name"
            value={formData}
            onChange={updateForm}
          />
        </label>
        <button type="submit" className="button-createChronicleForm">
          Create
        </button>
      </form>
    </section>
  );
};

export default CreateChronicleForm;
