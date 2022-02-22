import React from 'react';
import Navbar from '../components/Navbar';
import WeatherList from '../components/WeatherList';

function ListPage() {
    return (
        <div>
            <Navbar/>
            <WeatherList/>
        </div>
    )
}

export default ListPage;