import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WeatherImage from './WeatherImage';
import '../styles/styles.css';

function WeatherNow() {
    const [weatherNow, setWeatherNow] = useState([]);

    useEffect(() => (
        axios.get('https://ws.smn.gob.ar/map_items/weather')
         .then(function (response) {
             for (let x in response.data) {
                if (response.data[x].name === 'Presidencia Roque Sáenz Peña' && response.data[x].province === 'Chaco') {
                    setWeatherNow(response.data[x]);
                    break;
                }
             }
         })
    ), [])

    return (
        <div className='container mt-5 card p-2'>
            {weatherNow.weather ? 
            <div className='row'>
                <WeatherImage description={weatherNow.weather.description}/>
                <div className='col'>
                    <p className='font-size-location'>{weatherNow.name}, {weatherNow.province}</p>
                    <div>
                        <p className='font-size-temp'>{weatherNow.weather.tempDesc}</p>
                        <p className='font-size-description'>{weatherNow.weather.description}</p>
                        <p className='font-size-weather'>Humedad: {weatherNow.weather.humidity}%</p>
                        <p className='font-size-weather'>Presion: {weatherNow.weather.pressure}</p>
                        <p className='font-size-weather'>Visibilidad: {weatherNow.weather.visibility}</p>
                        <p className='font-size-weather'>Viento: {weatherNow.weather.wind_speed} km/h {weatherNow.weather.wing_deg}</p>
                    </div>
                </div>
            </div> : <p className='d-flex justify-content-center font-size-description'>Cargando...</p>}
        </div>
    )
}

export default WeatherNow;