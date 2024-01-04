import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import SearchCountries from "./components/SearchCountries/SearchCountries.tsx";
import Countries from "./components/Countries/Countries.tsx";
import JobBoards from "./components/JobBoards/JobBoards.tsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SearchCountries></SearchCountries>
      <JobBoards countryCode={"us"}></JobBoards>
      <Countries></Countries>
    </>
  )
}

export default App
