import { TYPE_COLORS } from "../../utils/typeColors";
import { DARKENED_COLORS } from "../../utils/darkenedColors";
import { capitalizeFirstLetter } from "../../utils/utils";
import Stats from "../Stats/Stats";
import SpeciesInfo from "../SpeciesInfo/SpeciesInfo";
import {
  FrontSprite,
  Modal,
  ModalContainer,
  ModalContentContainer,
  ModalHeader,
  SpriteTypeFlexContainer,
  Type,
  TypeContainer,
} from "./PokemonModal.styles";
import Abilities from "../Abilities/Abilities";

const PokemonModal = ({ show, setShow, data }) => {
  const modalCloseHandler = () => {
    setShow(false);
  };

  //sets background to match type color, sets gradient if dual-typed
  let background =
    data.types.length > 1
      ? `linear-gradient(to right, ${
          TYPE_COLORS[data.types[0].type.name]
        } 50%, ${TYPE_COLORS[data.types[1].type.name]} 50%)`
      : `${TYPE_COLORS[data.types[0].type.name]}`;

  //toggles modal being visible or not by updating styles
  //set to fade in and out from the center of the viewport
  const styles = {
    showModalStyles: {
      "--bgColor": background,
      "--darkColor": DARKENED_COLORS[data.types[0].type.name],
      opacity: 0,
      zIndex: -1,
      width: "0px",
      height: "0px",
      top: "50%",
      left: "50%",
    },
    hideModalStyles: {
      "--bgColor": background,
      "--darkColor": DARKENED_COLORS[data.types[0].type.name],
      opacity: 1,
      zIndex: 3,
      height: "100vh",
      width: "100vw",
      top: "0%",
      left: "0%",
    },
  };

  return (
    <ModalContainer
      style={!show ? styles.showModalStyles : styles.hideModalStyles}
      onClick={modalCloseHandler}
    >
      <Modal>
        <ModalHeader>{capitalizeFirstLetter(data.species.name)}</ModalHeader>
        <ModalContentContainer>
          <SpriteTypeFlexContainer>
            <FrontSprite
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`}
              alt={`${data.name} front sprite`}
            />

            <TypeContainer>
              {data.types.map((type, index) => {
                const typeStyle = {
                  background: `${TYPE_COLORS[data.types[index].type.name]}`,
                };
                return (
                  <Type style={typeStyle} key={`${data.name} type ${index}`}>
                    {type.type.name.toUpperCase()}
                  </Type>
                );
              })}
            </TypeContainer>
          </SpriteTypeFlexContainer>

          <Abilities abilities={data.abilities} />

          <Stats stats={data.stats} name={data.name} />
        </ModalContentContainer>

        <SpeciesInfo url={data.species.url} />
      </Modal>
    </ModalContainer>
  );
};

export default PokemonModal;
