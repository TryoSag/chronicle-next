import { JSX, useState } from "react";
import Image from "next/image";
import Menu from "../Menu/Menu";

const Header = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <Image
        src="@/src/app/images/appIcon.png"
        alt="App logo"
        width={50}
        height={50}
      />
      <h1 className="text-title">Chronicler</h1>
      <button className="icon-menu" onClick={() => setShowMenu(!showMenu)}>
        ...
      </button>
      <Menu visible={showMenu} />
    </header>
  );
};

export default Header;
