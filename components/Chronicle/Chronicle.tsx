import { JSX } from "react";

interface propsChronicle {
  chronicleName: string;
  chronicleId: string;
}

const Chronicle = ({
  chronicleName,
  chronicleId,
}: propsChronicle): JSX.Element => {
  const action = (): void => {};

  return (
    <li onClick={action} className="container-chronicle">
      <div className="container-chronicleDecoration">
        <span className="text-name">{chronicleName + chronicleId}</span>
      </div>
    </li>
  );
};

export default Chronicle;
