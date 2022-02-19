import React from 'react';
import Navbar from '../components/Navbar';
import WeatherNow from '../components/WeatherNow';

function HomePage() {
    return (
        <div>
            <Navbar/>
            <WeatherNow/>
        </div>
    )
}

export default HomePage;