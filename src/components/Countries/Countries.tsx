import Country from "./Country.tsx";
import {useSelector} from "react-redux";
import {rootState} from "../../constants/core.tsx";

export default function Countries() {
  const countries = useSelector((state: rootState) => state.country.countries);
  const countryButtons = countries.map(
    (name: string) => <Country key={name} title={name}></Country>
  );

  return (
    <>
      <div className="row align-items-md-stretch text-center g-0 p-2">
        {countryButtons}
      </div>
    </>
  );
}