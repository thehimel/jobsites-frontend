export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function findCountriesByWord(countries: Countries, word: string): Countries {
  if (!word.length) {
    return countries;
  }

  const result: Countries = {};
  let code: string;
  for (code in countries) {
    if (countries[code].name.toLowerCase().includes(word.toLowerCase())) {
      result[code] = countries[code];
    }
  }
  return result;
}
