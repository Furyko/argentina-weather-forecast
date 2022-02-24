import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../styles/styles.css';

function WeatherForecast() {
    var [forecast, setForecast] = useState({});
    var [forecastTomorrow, setForecastTomorrow] = useState({weather: {morning_temp: ''}});
    var [forecastTwoDays, setForecastTwoDays] = useState({weather: {morning_temp: ''}});
    var [forecastThreeDays, setForecastThreeDays] = useState({weather: {morning_temp: ''}});
    useEffect(() => {
        axios.get('https://ws.smn.gob.ar/map_items/forecast/1')
            .then(function (response) {
                for (let x in response.data) {
                    if (response.data[x].name === 'Presidencia Roque Sáenz Peña' && response.data[x].province === 'Chaco') {
                        if (response.data[x].weather.day !== forecastTomorrow.weather.day) {
                            setForecastTomorrow(response.data[x]);
                        }
                        break;
                    }
                 }
            })
        axios.get('https://ws.smn.gob.ar/map_items/forecast/2')
            .then(function (response) {
                for (let x in response.data) {
                    if (response.data[x].name === 'Presidencia Roque Sáenz Peña' && response.data[x].province === 'Chaco') {
                        if (response.data[x].weather.day !== forecastTwoDays.weather.day) {
                            setForecastTwoDays(response.data[x]);
                        }
                        break;
                    }
                 }
            })
        axios.get('https://ws.smn.gob.ar/map_items/forecast/3')
            .then(function (response) {
                for (let x in response.data) {
                    if (response.data[x].name === 'Presidencia Roque Sáenz Peña' && response.data[x].province === 'Chaco') {
                        if (response.data[x].weather.day !== forecastThreeDays.weather.day) {
                            setForecastThreeDays(response.data[x]);
                        }
                        break;
                    }
                 }
            })
        setForecast({forecastTomorrow, forecastTwoDays, forecastThreeDays});
    }, [forecastTomorrow, forecastTwoDays, forecastThreeDays])
    return (
        <div className='container mb-4'>
            {forecast.forecastTomorrow && forecast.forecastTwoDays && forecast.forecastThreeDays ?
            <div className='row'>
                <div className='col mt-4'>
                    <div className='card' style={{minWidth: "200px"}}>
                        <div className='card-header d-flex justify-content-center'>Mañana</div>
                        <div className='card-body'>
                            <p className='d-flex justify-content-center'>Por la mañana</p>
                            <p className='d-flex justify-content-center font-size-forecast-temp'>{forecast.forecastTomorrow.weather.morning_temp}ºC</p>
                            <p>{forecast.forecastTomorrow.weather.morning_desc}</p>
                            <p className='d-flex justify-content-center'>Por la tarde</p>
                            <p className='d-flex justify-content-center font-size-forecast-temp'>{forecast.forecastTomorrow.weather.afternoon_temp}ºC</p>
                            <p>{forecast.forecastTomorrow.weather.afternoon_desc}</p>
                        </div>
                    </div>
                </div>
                <div className='col mt-4'>
                    <div className='card' style={{minWidth: "200px"}}>
                        <div className='card-header d-flex justify-content-center'>En dos días</div>
                        <div className='card-body'>
                            <p className='d-flex justify-content-center'>Por la mañana</p>
                            <p className='d-flex justify-content-center font-size-forecast-temp'>{forecast.forecastTwoDays.weather.morning_temp}ºC</p>
                            <p>{forecast.forecastTwoDays.weather.morning_desc}</p>
                            <p className='d-flex justify-content-center'>Por la tarde</p>
                            <p className='d-flex justify-content-center font-size-forecast-temp'>{forecast.forecastTwoDays.weather.afternoon_temp}ºC</p>
                            <p>{forecast.forecastTwoDays.weather.afternoon_desc}</p>
                        </div>
                    </div>
                </div>
                <div className='col mt-4'>
                    <div className='card' style={{minWidth: "200px"}}>
                        <div className='card-header d-flex justify-content-center'>En tres días</div>
                        <div className='card-body'>
                            <p className='d-flex justify-content-center'>Por la mañana</p>
                            <p className='d-flex justify-content-center font-size-forecast-temp'>{forecast.forecastThreeDays.weather.morning_temp}ºC</p>
                            <p>{forecast.forecastThreeDays.weather.morning_desc}</p>
                            <p className='d-flex justify-content-center'>Por la tarde</p>
                            <p className='d-flex justify-content-center font-size-forecast-temp'>{forecast.forecastThreeDays.weather.afternoon_temp}ºC</p>
                            <p>{forecast.forecastThreeDays.weather.afternoon_desc}</p>
                        </div>
                    </div>
                </div>
            </div> : 
            <div></div>}
        </div>
    )
}

export default WeatherForecast;