import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countires = ({ coutriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visiitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log("handle visited country clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlag = (flag) => {
    console.log("flag need to be added", flag);
    const newVisitiedFlag = [...visiitedFlags, flag];
    setVisitedFlags(newVisitiedFlag);
  };

  const countriesData = use(coutriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);
  return (
    <div>
      <h1>You, me & baby:{countries.length} </h1>
      <h3>Total Countries Visited: {visitedCountries.length} </h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>
            
            {country.name.common}
          </li>
        ))}
      </ol>

      <div className="visited-flags-container">
        {visiitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countires;
