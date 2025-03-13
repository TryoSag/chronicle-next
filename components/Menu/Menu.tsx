import { openToken } from "@/app/actions/user/token";
import { defaultName, tokenName } from "@/constants/components";
import { JSX, useEffect, useRef } from "react";

type MenuProps = {
  visible: boolean;
};

const Menu = ({ visible }: MenuProps): JSX.Element => {
  const getTokenName = async (): Promise<void> => {
    const { name } = await openToken();
    userName.current = name;
  };

  const userName = useRef(defaultName);
  useEffect(() => {
    getTokenName();
  }, []);

  const chroniclesClick = () => (window.location.href = "/chronicles");

  const tagsClick = () => (window.location.href = "/UserTags");

  const logoutClick = () => {
    localStorage.removeItem(tokenName);
    window.location.href = "/";
  };

  return (
    <main className={`menu__container ${visible && "visible"}`}>
      <div className="menu__container--background">
        <span className="text--username">{`Hello ${userName.current}`}</span>
        <ul className="menu__list-container">
          <li onClick={chroniclesClick} key={"chronicles"}>
            Chronicles
          </li>
          <li onClick={tagsClick} key={"tags"}>
            Tags
          </li>
          <li className="option--logout" onClick={logoutClick} key={"logout"}>
            Logout
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Menu;
