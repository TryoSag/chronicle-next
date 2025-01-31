interface propsEditTagCategory {
  index: number;
  categoryName: string;
  categoryText: string;
  updateForm: (index: number, value: string) => void;
}

const EditTagCategory = ({
  index,
  categoryName,
  categoryText,
  updateForm,
}: propsEditTagCategory): JSX.Element => {
  const updateAction = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateForm(index, event.target.value);
  };

  return (
    <li className="container-editTagCategory">
      <span className="text-category">{`${categoryName}:`}</span>
      <label htmlFor="categoryText" className="categoryText-input">
        <input
          type="text"
          id="categoryText"
          placeholder="Category Text"
          value={categoryText}
          onChange={updateAction}
        />
      </label>
    </li>
  );
};

export default EditTagCategory;
