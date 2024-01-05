import {useSelector} from "react-redux";
import {rowClasses} from "../Styles.ts";
import {CountriesState} from "../../constants/core.tsx";
import Country from "./Country.tsx";

export default function Countries() {
  const countries: Countries = useSelector((state: CountriesState) => state.country.countries);
  const countryButtons = Object.entries(countries).map(
    ([code, country]) => <Country key={code} code={code} name={country.name}></Country>
  );

  return (
    <>
      <div className={rowClasses}>
        {countryButtons}
      </div>
    </>
  );
}