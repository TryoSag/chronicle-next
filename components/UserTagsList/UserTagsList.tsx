import { JSX, useState } from "react";
import ButtonPlusMinus from "../ButtonPlusMinus/ButtonPlusMinus";
import { IUserTag } from "../../types/userTypes";
import { ITag } from "../../types/chroniclesTypes";
import { useParams } from "next/navigation";
import UserTag from "./UserTag/UserTag";

const UserTagsList = (): JSX.Element => {
  const params = useParams();
  if (params && typeof params.id === "string") {
    const chronicleId = params.id as string;
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
      // navigate(`/editTag${chronicleId}`);
    };
  }
  const newTag = (): void => {
    // navigate("/createTag");
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
