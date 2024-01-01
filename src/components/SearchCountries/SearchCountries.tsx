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
      <form className="d-flex pt-3 px-3" role="search">
        <input className="form-control text-center" type="search" placeholder="Search for a country..."
               aria-label="Search" onChange={handleChange}/>
      </form>
    </>
  );
}