import { useState, useRef } from "react";
import Country from "./components/Country";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ]);
  const [medals, setMedals] = useState([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);
  function handleDelete(countryId){
    console.log(`delete country: ${countryId}`);
    setCountries(countries.filter((w) => w.id !== countryId));
  }
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.id} country={country} medals={medals} onDelete = {handleDelete}/>
      ))}
    </div>
  );
}

export default App;