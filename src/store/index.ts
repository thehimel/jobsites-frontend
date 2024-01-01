import {configureStore} from '@reduxjs/toolkit';
import {CountryReducer} from "./CountrySlice.ts";

const store = configureStore({
  reducer: {country: CountryReducer},
});

export default store;
