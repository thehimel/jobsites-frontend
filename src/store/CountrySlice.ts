import {createSlice} from '@reduxjs/toolkit';
import {slices} from "./slices.ts";
import {findCountriesByWord} from "../scripts/utilities.tsx";
import {countries} from "../data/Countries.ts"
import {topJobBoards} from "../data/TopJobBoards.ts";

const CountrySlice = createSlice({
  name: slices.country,
  initialState: {countries: countries, selectedCode: ''},
  reducers: {
    updateCountries(state, action): void {
      const word: string = action.payload;
      state.countries = findCountriesByWord(countries, word);
    },
    updateSelectedCode(state, action): void {
      const code: string = action.payload;
      if (code.toUpperCase() in topJobBoards) {
        state.selectedCode = action.payload;
      }
    },
  },
});

export const CountryActions = CountrySlice.actions;
export const CountryReducer = CountrySlice.reducer;
