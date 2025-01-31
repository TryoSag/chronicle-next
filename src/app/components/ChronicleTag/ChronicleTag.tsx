import { ITag } from "../../types/chroniclesTypes";

interface propChronicleTag {
  tag: ITag;
  actionExpandTag: (tagName: string) => void;
  actionEditTag: (tagIndex: number) => void;
  tagIndex: number;
  expanded: boolean;
}

const ChronicleTag = ({
  tag,
  actionExpandTag,
  actionEditTag,
  tagIndex,
  expanded,
}: propChronicleTag): JSX.Element => {
  const { tagName, title, resume, categories, description } = tag;

  const actionExpand = () => actionExpandTag(tagName);

  const actionEdit = () => actionEditTag(tagIndex);

  return (
    <li
      onClick={actionExpand}
      className={`container-chronicleTag ${expanded && "expandedTag"}`}
    >
      <div className="header-chronicleTag">
        <h3 className="title-chronicleTag">{tagName}</h3>
        {expanded && (
          <button onClick={actionEdit} className="title-chronicleTag" />
        )}
      </div>
      <h4 className="title-chronicleTag">{title}</h4>
      <span className="text-chronicleTag">{resume}</span>
      {expanded && (
        <>
          <ul>
            {categories.map(({ categoryName, categoryText }) => (
              <li
                className="container-chronicleTag"
                key={`category ${categoryName}`}
              >
                <span className="text-chronicleTag">{`${categoryName}:`}</span>
                <span className="text-chronicleTag">{categoryText}</span>
              </li>
            ))}
          </ul>
          <p className="text-chronicleTag">{description}</p>
        </>
      )}
    </li>
  );
};

export default ChronicleTag;
