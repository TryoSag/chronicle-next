import { JSX } from "react";

const Header = (): JSX.Element => {
  return (
    <header className="container-header">
      <img src="../../../public/images/appIcon.png" alt="App logo" />
      <h1 className="text-title">Chronicler</h1>
      <button className="icon-logout" />
    </header>
  );
};

export default Header;
