import React, { useContext, useState } from 'react';
import axios from 'axios';
import { LocationDataContext } from '../pages/HomePage';

function SearchBar() {
    const [ cityName, setCityName ] = useState()
    const { locationData, setLocationData } = useContext(LocationDataContext)

    const onSearchAction = () => {
        console.log("city: ",cityName)
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${cityName}&details=true`)
         .then((res) => {
            console.log(res.data)
            console.log("key",res.data[0].Key)
            setLocationData(res.data[0])
         })
    }

    return (
        <div className={"container d-flex align-items-center " + (locationData ? "mt-4" : "vh-100")}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Busca una ciudad (Ejemplo: San Miguel, Buenos Aires)" onChange={(e) => setCityName(e.target.value)}/>
                <button className="btn btn-primary" type="button" onClick={onSearchAction}>Buscar</button>
            </div>
        </div>
    )
}

export default SearchBar;