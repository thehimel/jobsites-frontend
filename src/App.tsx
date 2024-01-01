import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import Countries from "./components/Countries/Countries.tsx";
import SearchCountries from "./components/SearchCountries/SearchCountries.tsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SearchCountries></SearchCountries>
      <Countries></Countries>
    </>
  )
}

export default App
