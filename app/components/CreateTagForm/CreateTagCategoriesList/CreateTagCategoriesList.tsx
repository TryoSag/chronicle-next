import { JSX, useState } from "react";
import CreateTagCategory from "../CreateTagCategory/CreateTagCategory";
import { IUserTagCategory } from "../../../types/userTypes";

interface propsCreateTagCategoriesList {
  updateCategories: (categories: IUserTagCategory[]) => void;
}

const CreateTagCategoriesList = ({
  updateCategories,
}: propsCreateTagCategoriesList): JSX.Element => {
  const newCategory = { categoryName: "" };
  const emptyCategoryList = [newCategory];

  const [formData, setFormData] = useState(emptyCategoryList);

  const updateForm = (index: number, value: string): void => {
    const newCategoryName = { categoryName: value };
    setFormData(formData.splice(index, 1, newCategoryName));
    updateCategories(formData);
  };

  const addCategory = () => {
    setFormData([...formData, newCategory]);
  };

  const deleteCategory = (index: number) => {
    setFormData(formData.length > 1 ? formData.slice(index, 1) : [newCategory]);
  };

  return (
    <ul className="container-tagCategories">
      {formData.map(({ categoryName }, index) => (
        <CreateTagCategory
          index={index}
          categoryName={categoryName}
          lastTag={formData.length - 1 === index}
          updateForm={updateForm}
          deleteCategory={deleteCategory}
          addCategory={addCategory}
          key={`${categoryName}-${index}`}
        />
      ))}
    </ul>
  );
};

export default CreateTagCategoriesList;
