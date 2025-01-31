import { useState } from "react";
import ChronicleTag from "../ChronicleTag/ChronicleTag";
import ButtonPlusMinus from "../ButtonPlusMinus/ButtonPlusMinus";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useNavigate, useParams } from "react-router-dom";

const ChronicleTagsList = (): JSX.Element => {
  const navigate = useNavigate();
  const chronicles = useSelector((state: RootState) => state.chronicles);
  const { chronicleId } = useParams();
  const chronicleIdSelected = chronicleId?.replace(":", "");

  const { tags } = chronicles.filter(
    ({ chronicleId }) => chronicleId === chronicleIdSelected
  )[0];

  const [expand, setExpand] = useState("");

  const addTag = (): void => {
    navigate(`/userTags${chronicleId}`);
  };

  const actionEdit = (tagIndex: number) => {
    navigate(`/editTag${chronicleId}:${tagIndex}`);
  };

  return (
    <main className="container-chronicleTagsList">
      <ul>
        {tags.map((tag, tagIndex) => {
          const expanded = tag.title === expand;
          return (
            <ChronicleTag
              tag={tag}
              actionExpandTag={setExpand}
              actionEditTag={actionEdit}
              tagIndex={tagIndex}
              expanded={expanded}
              key={`tag ${tag.title}`}
            />
          );
        })}
      </ul>
      <ButtonPlusMinus action={addTag} symbol="plus" />
    </main>
  );
};

export default ChronicleTagsList;
