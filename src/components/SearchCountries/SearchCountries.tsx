import React from 'react';
import {useDispatch} from "react-redux";
import {CountryActions} from "../../store/CountrySlice.ts";

export default function SearchCountries() {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(
    CountryActions.updateCountries(event.target.value)
  );

  return (
    <>
      <form className="d-flex px-5 pt-5" role="search">
        <input className="form-control me-2 text-center" type="search" placeholder="Search for a country..."
               aria-label="Search" onChange={handleChange}/>
      </form>
    </>
  );
}