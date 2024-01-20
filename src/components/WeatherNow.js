import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WeatherImage from './WeatherImage';
import '../styles/styles.css';

function WeatherNow() {
    const [weatherNow, setWeatherNow] = useState([]);

    useEffect(() => (
        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/8127?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}`)
         .then((res) => {
            const data = res.data[0]
            console.log(data)
            setWeatherNow(data);
         })
    ), [])

    return (
        <div className='container mt-5 card p-2'>
            { weatherNow.WeatherText ? 
            <div className='row'>
                <WeatherImage imageId={ weatherNow.WeatherIcon }/>
                <div className='col d-flex align-items-center'>
                    {/*<p className='font-size-location'>{weatherNow.name}, {weatherNow.province}</p>*/}
                    <div>
                        <p className='font-size-temp'>{weatherNow.Temperature.Metric.Value}°{weatherNow.Temperature.Metric.Unit}</p>
                        <p className='font-size-description'>{weatherNow.WeatherText}</p>
                        <p className='font-size-weather'>{ weatherNow.HasPrecipitation ? 'Sin precipitaciones' : 'Con precipitaciones' }</p>
                    </div>
                </div>
            </div> : <p className='d-flex justify-content-center font-size-description'>Cargando...</p>}
        </div>
    )
}

export default WeatherNow;