import { JSX } from "react";
import { IUserTag } from "../../../types/userTypes";

interface propUserTag {
  tag: IUserTag;
  actionExpandTag: (tagName: string) => void;
  actionSelectTag: (tag: IUserTag) => void;
  expanded: boolean;
}

const UserTag = ({
  tag,
  tag: { tagName, categories },
  actionExpandTag,
  actionSelectTag,
  expanded,
}: propUserTag): JSX.Element => {
  const actionExpand = () => actionExpandTag(tagName);

  const actionSelect = () => actionSelectTag(tag);
  return (
    <li
      onClick={actionExpand}
      className={`container-userTag ${expanded && "expandedTag"}`}
    >
      <h3 className="title-userTag">{tagName}</h3>
      {expanded && (
        <>
          <ul>
            {categories.map(({ categoryName }) => (
              <li className="text-userTag" key={`category ${categoryName}`}>
                {categoryName}
              </li>
            ))}
          </ul>
          <span className="text-userTag">Description</span>
        </>
      )}
      <button onClick={actionSelect} className="button-select">
        Select
      </button>
    </li>
  );
};

export default UserTag;
