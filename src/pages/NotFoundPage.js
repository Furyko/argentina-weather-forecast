import React from 'react';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';

function NotFoundPage() {
    return (
        <div>
            <Navbar/>
            <div className='d-flex justify-content-center vh-100 align-items-center'>
                <div className='card'>
                    <div className='card-body'>404 Not Found</div>
                    <div className='card-footer d-flex justify-content-center'>
                        <Link to='/'><button className='btn-danger'>Ir al inicio</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;