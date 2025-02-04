import { JSX, useState } from "react";
import ChronicleTag from "../ChronicleTag/ChronicleTag";
import ButtonPlusMinus from "../ButtonPlusMinus/ButtonPlusMinus";
import { useParams } from "next/navigation";

const ChronicleTagsList = (): JSX.Element => {
  const params = useParams();
  const chronicleIdSelected = chronicleId?.replace(":", "");

  const { tags } = chronicles.filter(
    ({ chronicleId }) => chronicleId === chronicleIdSelected
  )[0];

  const [expand, setExpand] = useState("");

  const addTag = (): void => {};

  const actionEdit = (): void => {};

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
