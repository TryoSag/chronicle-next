import { JSX } from "react";
import Header from "../Header/Header";

type logedLoyoutProps = {
  children: JSX.Element;
};

const LogedLoyout = ({ children }: logedLoyoutProps): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LogedLoyout;
