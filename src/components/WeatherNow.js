import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WeatherImage from './WeatherImage';
import '../styles/styles.css';

function WeatherNow({ locationData }) {
    const [weatherNow, setWeatherNow] = useState([]);

    useEffect(() => (
        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationData.Key}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&details=true`)
         .then((res) => {
            const data = res.data[0]
            console.log(data)
            setWeatherNow(data);
        })
    ), [ locationData ])

    return (
        <div className='container mt-4 card p-2'>
            { weatherNow.WeatherText ? 
            <div className='row'>
                <WeatherImage imageId={ weatherNow.WeatherIcon }/>
                <div className='col d-flex align-items-center'>
                    <div>
                        <span className='font-size-location'>{ locationData.LocalizedName }, { locationData.AdministrativeArea.LocalizedName }</span>
                        <p className='font-size-temp'>{weatherNow.Temperature.Metric.Value}°{weatherNow.Temperature.Metric.Unit}</p>
                        <span className='font-size-description'>ST: { weatherNow.RealFeelTemperatureShade.Metric.Value }°{ weatherNow.RealFeelTemperatureShade.Metric.Unit }</span>
                        <p className='font-size-description'>{ weatherNow.WeatherText }</p>
                        <p className='font-size-weather'>{ weatherNow.HasPrecipitation ? 'Con precipitaciones' : 'Sin precipitaciones' }</p>
                        <p className='font-size-weather'>Humedad: { weatherNow.RelativeHumidity }</p>
                        <p className='font-size-weather'>Viento: { weatherNow.Wind.Speed.Metric.Value } { weatherNow.Wind.Speed.Metric.Unit } { weatherNow.Wind.Direction.Degrees } { weatherNow.Wind.Direction.Localized }</p>
                        <p className='font-size-weather'>Ráfagas: { weatherNow.WindGust.Speed.Metric.Value } { weatherNow.WindGust.Speed.Metric.Unit }</p>
                        <p className='font-size-weather'>Visibilidad: { weatherNow.Visibility.Metric.Value } { weatherNow.Visibility.Metric.Unit }</p>
                    </div>
                </div>
            </div> : <p className='d-flex justify-content-center font-size-description'>Cargando...</p> }
        </div>
    )
}

export default WeatherNow;