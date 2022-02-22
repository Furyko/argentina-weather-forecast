import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WeatherImage from './WeatherImage';

function WeatherList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('https://ws.smn.gob.ar/map_items/weather')
        .then(function (response) {
            setList(response.data);
        })
    }, [])
    return (
        <div className='container mb-4'>
            {list.map((item, index) => 
            <div key={index} className='row mt-4'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col'>
                                <WeatherImage description={item.weather.description}/>
                            </div>
                            <div className='col-5' style={{minWidth: '300px'}}>
                                <p className='font-size-location-list'>{item.province + ", " + item.name}</p>
                                <p className='font-size-temp'>{item.weather.tempDesc}</p>
                                <p className='font-size-description'>{item.weather.description}</p>
                            </div>
                            <div className='col p-3'>
                                <p className='font-size-weather'>Humedad: {item.weather.humidity}%</p>
                                <p className='font-size-weather'>Presion: {item.weather.pressure}</p>
                                <p className='font-size-weather'>Visibilidad: {item.weather.visibility}</p>
                                <p className='font-size-weather'>Viento: {item.weather.wind_speed} km/h {item.weather.wing_deg}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default WeatherList;