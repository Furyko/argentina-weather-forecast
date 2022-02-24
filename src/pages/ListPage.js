import React from 'react';
import Navbar from '../components/Navbar';
import WeatherList from '../components/WeatherList';
import ToTopArrow from '../components/ToTopArrow';

function ListPage() {
    return (
        <div>
            <Navbar/>
            <WeatherList/>
            <ToTopArrow/>
        </div>
    )
}

export default ListPage;