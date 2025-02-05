import { JSX, useState } from "react";
import { INewChronicle } from "../../../types/chroniclesTypes";

const CreateChronicleForm = (): JSX.Element => {
  const emptyNewChronicle = "";

  const [formData, setFormData] = useState(emptyNewChronicle);

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData(event.target.value);
  };

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (
      chronicles.filter((chronicle) => chronicle.chronicleName === formData)
        .length < 1
    ) {
      const newChronicle: INewChronicle = {
        chronicleName: formData,
        owner: userId,
        tags: [],
      };
    } else {
      setFormData(emptyNewChronicle);
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
