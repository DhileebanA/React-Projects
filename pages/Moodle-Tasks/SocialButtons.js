import React from 'react';
import { Menu } from '../Menu';

export function SocialButtons(){
    return(
        <>
        <div className='mainBgSocial d-flex justify-content-center align-items-center text-center text-light'>
            <div>
                <h1>Social Buttons</h1>
                <div className='midBgSocial d-flex justify-content-center align-items-center column-gap-4 p-3'>
                    <div className='btn btn-warning'>Like</div>
                    <div className='btn btn-light'>Comment</div>
                    <div className='btn btn-primary'>Share</div>
                </div>
            </div>
        </div>
        </>
    );
}