import React, { useContext, useState } from 'react';
import axios from 'axios';
import { LocationDataContext } from '../pages/HomePage';
import ReachedLimitModal from './ReachedLimitModal'

function SearchBar() {
    const [ cityName, setCityName ] = useState()
    const [ cityStaticName, setCityStaticName ] = useState()
    const [ showAlert, setShowAlert ] = useState(false)
    const [ showDescription, setShowDescription ] = useState(true)
    const { locationData, setLocationData } = useContext(LocationDataContext)
    const [ modalShow, setModalShow ] = useState(false);

    const onSearchAction = () => {
        console.log("city: ",cityName)
        setCityStaticName(cityName)
        axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${cityName}&details=true`)
        .then((res) => {
            console.log(res.data)
            console.log("key",res.data[0]?.Key)
            console.log(res.data.length)
            if (res.data.length <= 0) {
                setShowAlert(true)
            } else { 
                setShowAlert(false)
            }
            setLocationData(res.data[0])
        })
        .catch((err) => {
            console.log(err)
            setModalShow(true)
        })
    }

    const onPressAlertButton = () => {
        setShowAlert(false)
    }

    const onPressDescriptionButton = () => {
        setShowDescription(false)
    }

    return (
        <div className={"container d-flex align-items-center " + (locationData ? "mt-4" : "vh-100")}>
            <div className='input-group mb-3 justify-content-center'>
                { showDescription ?
                    <div className={"alert alert-info alert-dismissible fade mt-3 show"}>
                        <span className="material-symbols-outlined">partly_cloudy_day</span>
                        Busca una ciudad para ver su clima
                        <button type="button" className="btn-close" onClick={onPressDescriptionButton}></button>
                    </div> :
                    <></>
                }
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Busca una ciudad (Ejemplo: San Miguel, Buenos Aires)" onChange={(e) => setCityName(e.target.value)}/>
                    <button className="btn btn-primary" type="button" onClick={onSearchAction}>Buscar</button>
                </div> 
                { showAlert ?
                    <div className={"alert alert-warning alert-dismissible fade mt-3 show"}>
                        No se encontró una ciudad llamada "{cityStaticName}"
                        <button type="button" className="btn-close" onClick={onPressAlertButton}></button>
                    </div> :
                    <></>
                }

                <ReachedLimitModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    )
}

export default SearchBar;