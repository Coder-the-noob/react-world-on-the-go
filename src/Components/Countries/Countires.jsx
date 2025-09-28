import React, { use } from 'react';
import Country from '../Country/Country';

const Countires = ({coutriesPromise}) => {

    const countriesData = use(coutriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h1>In the Countries:{countries.length} </h1>
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country = {country}></Country>)
            }
        </div>
    );
};

export default Countires;