//when pokeAPI adds further generations, adjusting this number should allow this app to stay up to date
export const POKEDEX_MAX_SIZE = 905;

export const capitalizeFirstLetter = (str) => {
  if (!str) return;

  if (str.indexOf("-") === -1) {
    return str[0].toUpperCase() + str.substring(1);
  } else {
    //capitalizes second part of hypenated names/moves/abilites and removes the hyphen
    const index = str.indexOf("-") + 1;
    return (
      str[0].toUpperCase() +
      str.substring(1, index - 1) +
      " " +
      str[index].toUpperCase() +
      str.substring(index + 1)
    );
  }
};
