import React, {useEffect, useState} from 'react';
import axios from 'axios';
import WeatherImage from './WeatherImage';
import ReachedLimitModal from './ReachedLimitModal'

function WeatherList() {
    const [ list, setList ] = useState(null)
    const [ cityName, setCityName ] = useState()
    const [ cityStaticName, setCityStaticName ] = useState()
    const [ showAlert, setShowAlert ] = useState(false)
    const [ showDescription, setShowDescription ] = useState(true)
    const [ modalShow, setModalShow ] = useState(false);
    
    useEffect(() => {
    }, [])

    const onSearchAction = () => {
        console.log("city: ",cityName)
        setCityStaticName(cityName)
        axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${cityName}&details=true`)
        .then((res) => {
            console.log(res.data)
            if (res.data.length <= 0) {
                setShowAlert(true)
            } else { 
                setShowAlert(false)
            }
            setList(res.data)
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
        <>
            <div className={"container d-flex align-items-center " + (list ? "mt-4" : "vh-100")}>
                <div className='input-group mb-3 justify-content-center'>
                    { showDescription ?
                        <div className={"alert alert-info alert-dismissible fade mt-3 show"}>
                            <span className="material-symbols-outlined">apartment</span>
                            Hay muchas ciudades con nombres similares. Esta herramienta te va a mostrar esas ciudades para que puedas encontrar la tuya
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
            <div className='container mb-4'>
                { list ?
                <>
                    { list.map((item, index) => 
                    <div key={index} className='row mt-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row justify-content-between'>
                                    <div className='col-5'>
                                        <p className='font-size-location-list'>{item.EnglishName + ", " + item.AdministrativeArea.LocalizedName + ", " + item.Country.LocalizedName}</p>
                                    </div>
                                    {/*<div className='col-5'>
                                        <button type="button" className="btn btn-primary">Ver clima para esta zona</button>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </> : 
                <></>
                }
            </div>
        </>
    )
}

export default WeatherList;