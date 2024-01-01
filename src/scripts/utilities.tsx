export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const filterArrayByWord = (elements: string[], word: string): string[] => {
  const wordLower = word.toLowerCase();
  return !word.length ? elements : elements.filter(element => element.toLowerCase().includes(wordLower));
};
