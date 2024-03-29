import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../styles/styles.css';

function WeatherForecast({ locationData }) {
    var [forecast, setForecast] = useState({});

    useEffect(() => {
        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationData.Key}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}`)
            .then(function (res) {
                if (res.data) setForecast(res.data);
                console.log(res.data)
            })
    }, [ locationData ])

    /* Utilities */
    const getDayName = (dateString) => {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        let d = new Date(dateString);
        let dayName = days[d.getDay()];
        return dayName
    }

    const convertFtoC = (fahrenheit) => {
        let celsius = (fahrenheit - 32) * 5/9;
        return celsius.toFixed();
    }

    const getTemperature = (data) => {
        if (data.Unit == 'F') {
            return `${ convertFtoC(data.Value) }°C`
        }
        return `${data.Value}°${data.Unit}`
    }

    return (
        <div className='container'>
            { forecast.DailyForecasts ?
            <div className='row'>
                { forecast.DailyForecasts.map((day, index) => 
                    <div className='col mt-4' key={index}>
                        <div className='card' style={{minWidth: "200px"}}>
                            <div className='card-header d-flex justify-content-center'>{ getDayName(day.Date) }</div>
                            <div className='card-body'>
                                <div className='d-flex justify-content-around'>
                                    <p className='d-flex justify-content-center font-size-forecast-temp'>{ getTemperature(day.Temperature.Minimum) }/</p>
                                    <p className='d-flex justify-content-center font-size-forecast-temp'>{ getTemperature(day.Temperature.Maximum) }</p>
                                </div>
                                <h5 className='d-flex justify-content-center'>Por el día</h5>
                                <p>{ day.Day.IconPhrase }</p>
                                <p>{ day.Day.HasPrecipitation ? 'Con precipitaciones' : 'Sin precipitaciones'}</p>
                                <h5 className='d-flex justify-content-center'>Por la noche</h5>
                                <p>{ day.Night.IconPhrase }</p>
                                <p>{ day.Night.HasPrecipitation ? 'Con precipitaciones' : 'Sin precipitaciones'}</p>
                            </div>
                        </div>
                    </div>
                ) }
            </div> : 
            <div></div>}
        </div>
    )
}

export default WeatherForecast;