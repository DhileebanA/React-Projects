import React from 'react';
import { Menu } from '../Menu';

export function SuperOverLeague() {
    return (
        <>
            <div className='mainBgLeague d-flex justify-content-center align-items-center text-center text-light'>
                <div>
                    <h1>Super Over League</h1>
                    <div className='row d-flex justify-content-center align-items-center p-5'>
                        <img src='https://assets.ccbp.in/frontend/react-js/rcb-img.png' className='w-50 p-0 leagueImg' />
                        <img src='https://assets.ccbp.in/frontend/react-js/csk-img.png' className='w-50 p-0 leagueImg' />
                    </div>
                </div>
            </div>
        </>
    );
}