import Country from "./Country.tsx";
import {useSelector} from "react-redux";
import {rootState} from "../../constants/core.tsx";
import {rowClasses} from "../Styles.ts";

export default function Countries() {
  const countries = useSelector((state: rootState) => state.country.countries);
  const countryButtons = countries.map(
    (name: string) => <Country key={name} title={name}></Country>
  );

  return (
    <>
      <div className={rowClasses}>
        {countryButtons}
      </div>
    </>
  );
}