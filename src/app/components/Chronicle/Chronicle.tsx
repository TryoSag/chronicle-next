import { JSX } from "react";
import { useNavigate } from "react-router-dom";

interface propsChronicle {
  chronicleName: string;
  chronicleId: string;
}

const Chronicle = ({
  chronicleName,
  chronicleId,
}: propsChronicle): JSX.Element => {
  const navigate = useNavigate();

  const action = (): void => {
    navigate(`/chronicleTags:${chronicleId}`);
  };

  return (
    <li onClick={action} className="container-chronicle">
      <div className="container-chronicleDecoration">
        <span className="text-name">{chronicleName}</span>
      </div>
    </li>
  );
};

export default Chronicle;
