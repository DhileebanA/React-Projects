import React from 'react';
import { Menu } from '../Menu';

export function CongratsCard(){
    return(
        <>
        <div className='mainBgCong d-flex justify-content-center align-items-center text-center'>
            <div>
                <h1>Congratulations</h1>
                <div className='midBgCong d-flex flex-column justify-content-center align-items-center p-5'>
                    <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' className='rounded-circle'/>
                    <h3>Kiran V</h3>
                    <p className='mb-0'>Vishnu Institute of Computer Education and Technology,</p><p className='mt-0'>Bhimavaram</p>
                    <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'/>
                </div>
            </div>
        </div>
        </>
    );
}