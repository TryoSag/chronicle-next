import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../redux/store/store";
import { ICategory } from "../../types/chroniclesTypes";
import { useParams, useNavigate } from "react-router-dom";
import EditTagCategoriesList from "../EditTagCategoriesList/EditTagCategoriesList";
import { editChronicleThunk } from "../../redux/thunks/chroniclesThunks";

const EditTagForm = (): JSX.Element => {
  const chronicles = useSelector((state: RootState) => state.chronicles);
  const { chronicleId, tagIndex } = useParams();

  const chronicleToEdit = chronicleId?.replace(":", "");

  const selectedChronicle = chronicles.filter(
    (chronicle) => chronicle.chronicleId === chronicleToEdit
  )[0];

  const tagIndexToEdit = tagIndex
    ? Number.parseInt(tagIndex.replace(":", ""))
    : selectedChronicle.tags.length - 1;

  const selectedTagForm = selectedChronicle.tags[tagIndexToEdit];

  const [formData, setFormData] = useState(selectedTagForm);
  const navigate = useNavigate();

  const updateForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const updateCategories = (categories: ICategory[]): void => {
    setFormData({ ...formData, categories: categories });
  };

  const formSubmit = (event: { preventDefault: () => void }) => {
    const editedChronicle = {
      ...selectedChronicle,
      tags: selectedChronicle.tags.splice(tagIndexToEdit, 1, formData),
    };
    editChronicleThunk("Token", editedChronicle);
    navigate(`/chronicleTags${chronicleId}`);
  };

  return (
    <main className="container-editTagForm">
      <form
        className="editTag-form"
        autoComplete="off"
        onSubmit={formSubmit}
        noValidate
      >
        <span className="text-tagName">{formData.tagName}</span>
        <div className="container-title">
          <label htmlFor="title" className="title-input">
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={formData.title}
              onChange={updateForm}
            />
          </label>
          <span className="text-dotsTitle">:</span>
        </div>
        <label htmlFor="resume" className="resume-input">
          <input
            type="text"
            id="resume"
            placeholder="Resume"
            value={formData.resume}
            onChange={updateForm}
          />
        </label>
        <EditTagCategoriesList
          categories={formData.categories}
          updateCategories={updateCategories}
        />
        <span className="text-description">Description:</span>
        <label htmlFor="description" className="description-input">
          <textarea
            id="description"
            placeholder="..."
            value={formData.description}
            onChange={updateForm}
            cols={30}
            rows={10}
          />
        </label>
        <button
          disabled={formData.title === "" || formData.resume === ""}
          type="submit"
          className="button-editTagForm"
        >
          Confirm
        </button>
      </form>
    </main>
  );
};

export default EditTagForm;
