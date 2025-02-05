import { useState } from "react";
import EditTagCategory from "../EditTagCategory/EditTagCategory";
import { ICategory } from "../../../../types/chroniclesTypes";

interface propsEditTagCategoriesList {
  categories: ICategory[];
  updateCategories: (categories: ICategory[]) => void;
}

const EditTagCategoriesList = ({
  categories,
  updateCategories,
}: propsEditTagCategoriesList) => {
  const [formData, setFormData] = useState(categories);

  const updateForm = (index: number, value: string) => {
    const newCategoryText = { ...formData[index], categoryText: value };
    setFormData(formData.splice(index, 1, newCategoryText));
    updateCategories(formData);
  };

  return (
    <ul className="container-categories">
      {formData.map(({ categoryName, categoryText }, index) => (
        <EditTagCategory
          index={index}
          categoryName={categoryName}
          categoryText={categoryText}
          updateForm={updateForm}
          key={`category-${index} ${categoryName}`}
        />
      ))}
    </ul>
  );
};

export default EditTagCategoriesList;
