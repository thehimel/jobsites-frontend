export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const filterArrayByWord = (elements: string[], word: string): string[] => {
  const prefixLower = word.toLowerCase();
  if (!word.length) {
    return elements;
  }
  return elements
    .filter(element => element.toLowerCase().includes(prefixLower))
    .map(element => element);
};
