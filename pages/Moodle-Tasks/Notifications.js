import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../Menu';

export function Notifications() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='mainNotify row g-4 text-light'>
                    <h1 className='text-center text-dark'>Notifications</h1>
                    <div>
                        <div className='bg-primary p-3'><FontAwesomeIcon icon={faCircleCheck} /> Information Message</div>
                        <div className='bg-success p-3'><FontAwesomeIcon icon={faCircleCheck} /> Success Message</div>
                        <div className='bg-warning p-3'><FontAwesomeIcon icon={faBell} /> Warning Message</div>
                        <div className='bg-danger p-3'><FontAwesomeIcon icon={faCircleExclamation} /> Error Message</div>
                    </div>
                </div>
            </div>
        </>
    );
}