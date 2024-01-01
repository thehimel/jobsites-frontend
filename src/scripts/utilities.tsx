export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const filterArrayByWord = (elements: string[], word: string): string[] => {
  const wordLower = word.toLowerCase();
  if (!word.length) {
    return elements;
  }
  return elements
    .filter(element => element.toLowerCase().includes(wordLower))
    .map(element => element);
};
