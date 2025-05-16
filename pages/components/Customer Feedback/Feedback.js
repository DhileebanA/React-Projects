import React from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css'
export function Feedback(){
    
    return(
        <>
            <div className="backGround text-center d-flex justify-self-center align-items-center">
                <div className='bg-light container block w-50 p-5'>
                    <h3 className=''>How satisfied are you with our customer support performance?</h3>
                    <div className='d-flex justify-content-center'>
                        <div>
                        <Link to='/thankyou' className='text-decoration-none emojis'>😥</Link>
                        <h6>SAD</h6>
                        </div>
                        <div className='mx-lg-5'>
                        <Link to='/thankyou' className='text-decoration-none emojis'>😐</Link>
                        <h6>NONE</h6>
                        </div>
                        <div>
                        <Link to='/thankyou' className='text-decoration-none emojis'>😃</Link>
                        <h6>HAPPY</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}