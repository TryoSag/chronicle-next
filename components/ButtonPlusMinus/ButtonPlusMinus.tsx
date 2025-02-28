import { JSX } from "react";

interface propsButtonPlusMinus {
  action: () => void;
  symbol: "plus" | "minus";
}

const ButtonPlusMinus = ({
  action,
  symbol,
}: propsButtonPlusMinus): JSX.Element => {
  return (
    <button onClick={action} className="container-button">
      <div className={`icon-${symbol}`} />
    </button>
  );
};

export default ButtonPlusMinus;
