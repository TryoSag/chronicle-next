import ChronclesList from "@/components/ChroniclesList/ChroniclesList";
import LogedLoyout from "@/components/LogedLoyout/LogedLoyout";
import { JSX } from "react";

const chronicles = (): JSX.Element => {
  return (
    <LogedLoyout>
      <ChronclesList />
    </LogedLoyout>
  );
};

export default chronicles;
