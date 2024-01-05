import {createSlice} from '@reduxjs/toolkit';
import {slices} from "./slices.ts";
import {findCountriesByWord} from "../scripts/utilities.tsx";
import {countries} from "../data/Countries.ts"

const CountrySlice = createSlice({
  name: slices.country,
  initialState: {countries: countries},
  reducers: {
    updateCountries(state, action) {
      const word: string = action.payload;
      state.countries = findCountriesByWord(countries, word);
    }
  },
});

export const CountryActions = CountrySlice.actions;
export const CountryReducer = CountrySlice.reducer;
