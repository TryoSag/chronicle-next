import { JSX } from "react";
import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <header>
      <Image
        src="@/src/app/images/appIcon.png"
        alt="App logo"
        width={50}
        height={50}
      />
      <h1 className="text-title">Chronicler</h1>
      <button className="icon-logout">Adios</button>
    </header>
  );
};

export default Header;
