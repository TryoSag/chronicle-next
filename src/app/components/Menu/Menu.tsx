import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const Menu = (visible: boolean): JSX.Element => {
  const navigate = useNavigate();

  const { username } = useSelector((state: RootState) => state.user);

  const chroniclesClick = () => navigate("/chronicles");

  const tagsClick = () => navigate("/userTags");

  const logoutClick = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <main className={`menu__container ${visible && "visible"}`}>
      <div className="menu__container--background">
        <span className="text--username">{`Hello ${username}`}</span>
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
