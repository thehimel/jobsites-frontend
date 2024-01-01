import {createSlice} from '@reduxjs/toolkit';
import {countries} from 'countries-list';
import {slices} from "./slices.ts";

const allCountries: string[] = Object.values(countries).map(country => country.name);

const filterArrayByWord = (elements: string[], word: string): string[] => {
  const prefixLower = word.toLowerCase();
  return elements
    .filter(element => element.toLowerCase().includes(prefixLower))
    .map(element => element);
};

const CountrySlice = createSlice({
  name: slices.country,
  initialState: {countries: allCountries},
  reducers: {
    updateCountries(state, action) {
      const word: string = action.payload;
      state.countries = word.length > 0 ? filterArrayByWord(allCountries, word) : allCountries;
    }
  },
});

export const CountryActions = CountrySlice.actions;
export const CountryReducer = CountrySlice.reducer;
