import { capitalizeFirstLetter } from "../../utils/utils";

const Ability = ({ data }) => {
  return <div>{capitalizeFirstLetter(data.ability.name)}</div>;
};

export default Ability;
