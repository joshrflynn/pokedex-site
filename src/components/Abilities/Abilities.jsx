import { capitalizeFirstLetter } from "../../utils/utils";
import { AbilityContainer, AbilityHeader } from "./Abilities.styles";

const Abilities = ({ abilities }) => {
  return (
    <AbilityContainer>
      <AbilityHeader>Abilities</AbilityHeader>
      {abilities.map((ability) => {
        return <div>{capitalizeFirstLetter(ability.ability.name)}</div>;
      })}
    </AbilityContainer>
  );
};

export default Abilities;
