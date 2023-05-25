import axios from 'axios';
import { useEffect, useState } from 'react';

const apiURL = "https://ih-countries-api.herokuapp.com/countries"



function CountriesList() {

    const [fetching, setFetching] = useState(false);

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        axios.get(apiURL).then((response)=>{
            setCountries(response.data);
            setFetching(true);
        })
    })

  return (
    <div>
        <h3>List of Countries</h3>
        {!fetching && <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'/>}
        {countries.map((country)=>{
            return(
                <div key={country._id}>
                    <Link to={`/countries/${country.alpha3Code}`}>
                        {country.name.common}
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default CountriesList