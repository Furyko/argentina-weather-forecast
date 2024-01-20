import React, {useEffect, useState} from 'react';

function WeatherImage(props) {
    const [image, setImage] = useState('');
    useEffect(() => {
        setImage(`https://www.accuweather.com/images/weathericons/${props.imageId}.svg`);
    }, [])
    return (
        <div className='col d-flex justify-content-center'>
            <img 
            src={image}
            alt='Imagen'
            width='260px'
            height='260px'/>
        </div>
    )
}

export default WeatherImage;