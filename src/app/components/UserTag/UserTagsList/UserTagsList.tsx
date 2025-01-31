import { useState } from "react";
import UserTag from "../UserTag";
import ButtonPlusMinus from "../../ButtonPlusMinus/ButtonPlusMinus";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { IUserTag } from "../../types/userTypes";
import { editChronicleThunk } from "../../redux/thunks/chroniclesThunks";
import { ITag } from "../../types/chroniclesTypes";

const UserTagsList = (): JSX.Element => {
  const navigate = useNavigate();
  const { tags } = useSelector((state: RootState) => state.user);
  const chronicles = useSelector((state: RootState) => state.chronicles);
  const { chronicleId } = useParams();
  const chronicleIdSelected = chronicleId?.replace(":", "");

  const chronicleToEdit = chronicles.filter(
    ({ chronicleId }) => chronicleId === chronicleIdSelected
  )[0];

  const selectedTag = (tag: IUserTag) => {
    const newChronicleTag: ITag = {
      ...tag,
      resume: "",
      title: "",
      description: "",
      categories: tag.categories.map((category) => ({
        ...category,
        categoryText: "",
      })),
    };
    const editedChronicle = {
      ...chronicleToEdit,
      tags: [...chronicleToEdit.tags, newChronicleTag],
    };
    editChronicleThunk("Token", editedChronicle);
    navigate(`/editTag${chronicleId}`);
  };

  const newTag = (): void => {
    navigate("/createTag");
  };

  const [expand, setExpand] = useState("");

  return (
    <main className="container-userTagsList">
      <ul>
        {tags.map((tag) => {
          const expanded = tag.tagName === expand;
          return (
            <UserTag
              tag={tag}
              actionExpandTag={setExpand}
              actionSelectTag={selectedTag}
              expanded={expanded}
              key={`tag ${tag.tagName}`}
            />
          );
        })}
      </ul>
      <ButtonPlusMinus action={newTag} symbol="plus" />
    </main>
  );
};

export default UserTagsList;
