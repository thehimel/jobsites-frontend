import {createSlice} from '@reduxjs/toolkit';
import {countries} from 'countries-list';
import {slices} from "./slices.ts";
import {filterArrayByWord} from "../scripts/utilities.tsx";

const allCountries: string[] = Object.values(countries).map(country => country.name);


const CountrySlice = createSlice({
  name: slices.country,
  initialState: {countries: allCountries},
  reducers: {
    updateCountries(state, action) {
      const word: string = action.payload;
      state.countries = filterArrayByWord(allCountries, word);
    }
  },
});

export const CountryActions = CountrySlice.actions;
export const CountryReducer = CountrySlice.reducer;
