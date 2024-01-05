import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import SearchCountries from "./components/SearchCountries/SearchCountries.tsx";
import Countries from "./components/Countries/Countries.tsx";
import JobBoards from "./components/JobBoards/JobBoards.tsx";
import {useSelector} from "react-redux";
import {CountriesState} from "./constants/core.tsx";

function App() {
  const selectedCode: string = useSelector((state: CountriesState) => state.country.selectedCode);
  return (
    <>
      <Navbar></Navbar>
      <SearchCountries></SearchCountries>
      {selectedCode && <JobBoards></JobBoards>}
      {!selectedCode && <Countries></Countries>}
    </>
  )
}

export default App
