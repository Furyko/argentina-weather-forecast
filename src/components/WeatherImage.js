import React, {useEffect, useState} from 'react';

function WeatherImage({ imageId }) {
    const [image, setImage] = useState('');
    useEffect(() => {
        setImage(`https://www.accuweather.com/images/weathericons/${imageId}.svg`);
    }, [ imageId ])
    return (
        <div className='col d-flex justify-content-center align-items-center'>
            <img 
            src={image}
            alt='Imagen'
            width='260px'
            height='260px'/>
        </div>
    )
}

export default WeatherImage;