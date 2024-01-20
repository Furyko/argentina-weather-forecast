import React, {useEffect, useState} from 'react';
import Despejado from '../images/weather-despejado.png';
import ParcialmenteNublado from '../images/weather-parcialmente-nublado.png';
import Nublado from '../images/weather-nublado.png';
import NubladoLluvia from '../images/weather-nublado-con-lluvia.png';
import ParcialmenteNubladoLluvia from '../images/weather-parcialmente-nublado-con-lluvia.png';

function WeatherImage(props) {
    const [image, setImage] = useState('');
    useEffect(() => {
        setImage(`https://www.accuweather.com//images/weathericons/${props.imageId}.svg`);
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