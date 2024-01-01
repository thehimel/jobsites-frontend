import {createSlice} from '@reduxjs/toolkit';
import {countries} from 'countries-list';
import {slices} from "./slices.ts";

const allCountries: string[] = Object.values(countries).map(country => country.name);

const filterCountriesByPrefix = (prefix: string): string[] => {
  const prefixLower = prefix.toLowerCase();
  return allCountries
    .filter(country => country.toLowerCase().startsWith(prefixLower))
    .map(country => country);
};

const CountrySlice = createSlice({
  name: slices.country,
  initialState: {countries: allCountries},
  reducers: {
    updateCountries(state, action) {
      const prefix: string = action.payload;
      state.countries = prefix.length > 0 ? filterCountriesByPrefix(prefix) : allCountries;
    }
  },
});

export const CountryActions = CountrySlice.actions;
export const CountryReducer = CountrySlice.reducer;
