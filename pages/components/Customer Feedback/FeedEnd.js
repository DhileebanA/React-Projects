import { BrowserRouter, Route } from 'react-router-dom';
import { Menu } from '../../Menu';
import './Feedback.css'
export function FeedbackEnd(){
    
    return(
        <>
            <div className="backGround text-center d-flex justify-self-center align-items-center">
                <div className='bg-light container block w-50 p-5'>
                    <div className='emojis'>❤️</div>
                    <h2>Thank You!</h2>
                    <p className=''>We will use your feedback to improve our customer support performance.</p>
                </div>
            </div>
        </>
    );
}