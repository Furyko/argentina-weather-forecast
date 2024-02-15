import React from 'react';
import WeatherList from '../components/WeatherList';
import ToTopArrow from '../components/ToTopArrow';

function ListPage() {
    return (
        <div>
            <WeatherList/>
            <ToTopArrow/>
        </div>
    )
}

export default ListPage;