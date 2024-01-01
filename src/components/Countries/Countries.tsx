import {countries} from 'countries-list'
import Country from "./Country.tsx";

export default function Countries() {
  const countryNames: string[] = Object.values(countries).map(country => country.name);
  const countryButtons = countryNames.map(
    (name) => <Country key={name} title={name}></Country>
  );

  return (
    <>
      <form className="d-flex px-5 pt-5" role="search">
        <input className="form-control me-2 text-center" type="search" placeholder="Search for a country..."
               aria-label="Search"/>
      </form>
      <div className="row align-items-md-stretch">
        {countryButtons}
      </div>
    </>
  );
}