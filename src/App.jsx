import { useState, useRef } from "react";
import Country from "./components/Country";
import NewCountry from "./components/NewCountry";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);
  const [medals, setMedals] = useState([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);
  function handleAdd(name) {
    console.log(`add ${name}`);
    const id = countries.length === 0 ? 1 : Math.max(...countries.map((country) => country.id)) + 1;
    setCountries(countries.concat({id: id, name: name, gold: 0, silver: 0, bronze: 0}))
  }
  function handleIncrement(countryId, medal){
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medal] += 1;
    console.log(countriesMutable[idx][medal]);
    setCountries(countriesMutable);
  }
  function handleDecrement(countryId, medal){
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medal] -= 1;
    console.log(countriesMutable[idx][medal]);
    setCountries(countriesMutable);
  }
  function handleDelete(countryId){
    console.log(`delete country: ${countryId}`);
    setCountries(countries.filter((w) => w.id !== countryId));
  }
  function getTotalMedalCount(medal){
    return countries.reduce((a, b) => a + b[medal], 0);
  }
  function calculateMedals(){
    let total = 0;
    medals.map((medal) => (
      total += getTotalMedalCount(medal.name)
    ))
    return total;
  }
  return (
    <div>
      <h1>Olympic Medals {calculateMedals()}</h1>
      {countries.map((country) => (
        <Country key={country.id} country={country} medals={medals} onDelete = {handleDelete} increment = {handleIncrement} decrement = {handleDecrement}/>
      ))}
      <NewCountry onAdd={handleAdd}/>
    </div>
  );
}

export default App;