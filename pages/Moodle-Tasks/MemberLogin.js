import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../Menu';

export function MemberLogin() {
    return (
        <>
            <div className='memBody d-flex justify-content-center align-items-center'>
                <div className='row bg-white w-75 d-flex justify-content-center rounded-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img src='https://freepngimg.com/download/laptop/162431-laptop-vector-notebook-png-free-photo.png' className='loginImg img-fluid' />
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='d-flex justify-content-center align-items-center p-3'>
                            <div>
                                <h4 className='text-center'>Member Login</h4>
                                <div className='bgTextBox rounded-pill ps-3 mt-3'>
                                    <span><FontAwesomeIcon icon={faEnvelope} /></span> <input type='text' placeholder='Email' className='borderTextBox col-10' />
                                </div>
                                <div className='bgTextBox rounded-pill ps-3 mt-3'>
                                    <span><FontAwesomeIcon icon={faLock} /></span><input type='password' placeholder='Password' className='borderTextBox col-10' />
                                </div>
                                <div>
                                    <a href='' className='col-12 btn btn-success rounded-pill mt-3 mb-3'>LOGIN</a>
                                </div>
                                <div className='text-center'>
                                    Forget <span className='text-success'>Username / Password ?</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-success text-center'>Create your account</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}