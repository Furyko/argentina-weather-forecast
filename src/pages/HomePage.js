import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import WeatherNow from '../components/WeatherNow';
import WeatherForecast from '../components/WeatherForecast';
import {Link} from 'react-router-dom';

export const LocationDataContext = createContext(null)

function HomePage() {
    const [ locationData, setLocationData ] = useState()
    const [ showIsCorrectCity, setShowIsCorrectCity ] = useState(false)

    useEffect(() => {
        if (locationData && locationData.Key) setShowIsCorrectCity(true)
    }, [locationData])

    const getCoordinates = () => {
        function setLocation(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

            getLocationId(latitude.toFixed(3), longitude.toFixed(3))
        }

        function errorHandler() {
            console.log("Ocurrió un error al obtener la ubicación")
            const latitude = '-34.608';
            const longitude = '-58.387';

            getLocationId(latitude, longitude)
        }

        if (navigator.geolocation) {
            const options = { maximumAge: 0, timeout: 5000, enableHighAccuracy: true }
            navigator.geolocation.getCurrentPosition(setLocation, errorHandler, options);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    const getLocationId = (lat, lon) => {
        axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${lat}%2C${lon}&details=true`)
            .then(function (res) {
                if (res.data) {
                    setLocationData(res.data)
                    console.log(res.data)
                }
            })
    }

    const onPressIsCorrectCityButton = () => {
        setShowIsCorrectCity(false)
    }

    return (
        <div>
            <LocationDataContext.Provider value={{ locationData, setLocationData }}>
                <SearchBar/>
                { showIsCorrectCity ?
                    <div className={"container d-flex align-items-center"}>
                        <div className='input-group justify-content-center'>
                            <div className={"alert alert-info alert-dismissible fade mt-3 show"}>
                                <span className="material-symbols-outlined align-middle me-2">info</span>
                                ¿No es la ciudad que buscas? Usa el siguiente formato: Ciudad, Provincia, País.
                                <hr></hr>
                                O usa la <Link className="active" aria-current="page" to='/lista'>herramienta para buscar nombres</Link>
                                <button type="button" className="btn-close" onClick={onPressIsCorrectCityButton}></button>
                            </div>
                        </div>
                    </div> :
                    <></>
                }
                { locationData ? 
                    <>
                        <WeatherNow locationData={locationData}/>
                        <WeatherForecast locationData={locationData}/>
                    </> :
                    <></>
                }
            </LocationDataContext.Provider>
        </div>
    )
}

export default HomePage;