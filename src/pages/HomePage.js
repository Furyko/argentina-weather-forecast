import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import WeatherNow from '../components/WeatherNow';
import WeatherForecast from '../components/WeatherForecast';

function HomePage() {
    const [ locationData, setLocationData ] = useState()

    useEffect(() => {
        getCoordinates()
    }, [])

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

    return (
        <div>
            <Navbar/>
                { locationData ? 
                    <>
                        <WeatherNow locationData={locationData}/>
                        <WeatherForecast locationData={locationData}/>
                    </> :
                    <div>Cargando...</div>
                }
        </div>
    )
}

export default HomePage;