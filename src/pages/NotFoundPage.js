import React from 'react';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div>
            <div className='d-flex justify-content-center vh-100 align-items-center'>
                <div className='card'>
                    <div className='card-body font-size-not-found'>404 Not Found</div>
                    <div className='card-footer d-flex justify-content-center'>
                        <Link to='/'><button className='btn btn-info'>Ir al inicio</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;