import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IChronicle } from "../../types/chroniclesTypes";
import { RootState } from "../../redux/store/store";
import Chronicle from "../Chronicle/Chronicle";
import ButtonPlusMinus from "../ButtonPlusMinus/ButtonPlusMinus";

const ChronclesList = (): JSX.Element => {
  const navigate = useNavigate();

  const chronicles: IChronicle[] = useSelector(
    (state: RootState) => state.chronicles
  );

  const newChronicle = (): void => {
    navigate("/createChronicle");
  };

  return (
    <main className="container-chronicleList">
      <ul>
        {chronicles.map(({ chronicleName, chronicleId }) => (
          <Chronicle
            chronicleName={chronicleName}
            chronicleId={chronicleId}
            key={chronicleId}
          />
        ))}
      </ul>
      <ButtonPlusMinus action={newChronicle} symbol="plus" />
    </main>
  );
};

export default ChronclesList;
