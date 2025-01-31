import ButtonPlusMinus from "../../ButtonPlusMinus/ButtonPlusMinus";

interface propsCreateTagCategory {
  index: number;
  categoryName: string;
  lastTag: boolean;
  updateForm: (index: number, value: string) => void;
  deleteCategory: (index: number) => void;
  addCategory: () => void;
}

const CreateTagCategory = ({
  index,
  categoryName,
  lastTag,
  updateForm,
  deleteCategory,
  addCategory,
}: propsCreateTagCategory) => {
  const updateAction = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateForm(index, event.target.value);
  };
  const deleteAction = (): void => {
    deleteCategory(index);
  };

  return (
    <li className="container-tagFormCategory">
      <label htmlFor="categoryName" className="category-input">
        <input
          type="text"
          id={`categoryName`}
          placeholder="Category Name"
          value={categoryName}
          onChange={updateAction}
          maxLength={20}
        />
      </label>
      <div className="container-buttons">
        {lastTag && <ButtonPlusMinus action={addCategory} symbol="plus" />}
        <ButtonPlusMinus action={deleteAction} symbol="minus" />
      </div>
    </li>
  );
};

export default CreateTagCategory;
