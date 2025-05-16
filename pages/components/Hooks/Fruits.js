import React from 'react';
import mangoes from '../../Assets/Mango.jpg'
import bananas from '../../Assets/Banana-removebg-preview.png'
import { useState } from 'react';
import { Menu } from '../../Menu';

export function EatFruits(){
    const[mango,setMango]=useState(0)
    const[banana,setBanana]=useState(0)
    return(
        <>
        <div className='bg-warning container-fluid p-5'>
            <div className='bg-white container rounded-3 p-4'>
                <h1 className='text-center'>Bob ate {mango} mangoes {banana} bananas</h1>
                <div className='row'>
                <div className='col-lg-6'>
                    <img src={mangoes} height='500px'/>
                    <div className='text-center'>
                        <button className='btn btn-warning' onClick={()=>setMango(mango+1)}>Eat Mango</button>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src={bananas} height='500px'/>
                    <div className='text-center'>
                        <button className='btn btn-warning' onClick={()=>setBanana(banana+1)}>Eat Mango</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}