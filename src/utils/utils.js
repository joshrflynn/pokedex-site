export const capitalizeFirstLetter = (str) => {
  if (!str) return;
  return str[0].toUpperCase() + str.substring(1);
};
