import React from 'react';
import Navbar from '../components/Navbar';
import WeatherNow from '../components/WeatherNow';
import WeatherForecast from '../components/WeatherForecast';

function HomePage() {
    return (
        <div>
            <Navbar/>
            <WeatherNow/>
            <WeatherForecast/>
        </div>
    )
}

export default HomePage;