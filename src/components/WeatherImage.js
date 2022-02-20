import React, {useEffect, useState} from 'react';
import Despejado from '../images/weather-despejado.png';
import ParcialmenteNublado from '../images/weather-parcialmente-nublado.png';
import Nublado from '../images/weather-nublado.png';
import NubladoLluvia from '../images/weather-nublado-con-lluvia.png';
import ParcialmenteNubladoLluvia from '../images/weather-parcialmente-nublado-con-lluvia.png';

function WeatherImage(props) {
    const [image, setImage] = useState('');
    useEffect(() => {
        if (props.description.toLowerCase().includes('despejado')) {
            setImage(Despejado);
        } else if (props.description.toLowerCase().includes('parcialmente nublado')) {
            if (props.description.toLowerCase().includes('lluvia') || props.description.toLowerCase().includes('llovizna')) {
                setImage(ParcialmenteNubladoLluvia);
            } else {
                setImage(ParcialmenteNublado);
            }
        } else if (props.description.toLowerCase().includes('algo nublado')) {
            if (props.description.toLowerCase().includes('lluvia') || props.description.toLowerCase().includes('llovizna')) {
                setImage(ParcialmenteNubladoLluvia);
            } else {
                setImage(ParcialmenteNublado);
            }
        } else if (props.description.toLowerCase().includes('nublado')) {
            if (props.description.toLowerCase().includes('lluvia') || props.description.toLowerCase().includes('llovizna')) {
                setImage(NubladoLluvia);
            } else {
                setImage(Nublado);
            }
        } else if (props.description.toLowerCase().includes('cubierto')) {
            if (props.description.toLowerCase().includes('lluvia') || props.description.toLowerCase().includes('llovizna')) {
                setImage(NubladoLluvia);
            } else {
                setImage(Nublado);
            }
        }
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