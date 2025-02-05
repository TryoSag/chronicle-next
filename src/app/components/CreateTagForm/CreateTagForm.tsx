import { JSX, useState } from "react";
import { IUserTag, IUserTagCategory } from "../../../types/userTypes";
import CreateTagCategoriesList from "./CreateTagCategoriesList/CreateTagCategoriesList";

const CreateTagForm = (): JSX.Element => {
  const emptyTagForm: IUserTag = {
    tagName: "",
    color: "white",
    categories: [],
  };

  const [formData, setFormData] = useState(emptyTagForm);

  const updateForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const updateCategories = (categories: IUserTagCategory[]): void => {
    setFormData({ ...formData, categories: categories });
  };

  const formSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (
      tags.filter((tag) => tag.tagName === formData.tagName).length > 0 ||
      "" === formData.tagName
    ) {
      setFormData({ ...formData, tagName: "" });
    } else {
      //navigate("/userTags");
    }
  };

  return (
    <main className="container-createTagForm">
      <form
        className="createTag-form"
        autoComplete="off"
        onSubmit={formSubmit}
        noValidate
      >
        <label htmlFor="tagName" className="tagName-input">
          <input
            type="text"
            id="tagName"
            placeholder="Tag Name"
            value={formData.tagName}
            onChange={updateForm}
          />
        </label>
        <label htmlFor="color" className="color-input">
          <div className={`container-colorSample ${formData.color}`} />
          <select id="color" onChange={updateForm} value={formData.color}>
            {
              //colors selector
            }
          </select>
        </label>
        <span className="text-createTagForm">Title:</span>
        <CreateTagCategoriesList updateCategories={updateCategories} />
        <span className="text-createTagForm">Description</span>

        <button type="submit" className="button-createTagForm">
          Create
        </button>
      </form>
    </main>
  );
};

export default CreateTagForm;
