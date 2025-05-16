import React from 'react';
import { Menu } from '../Menu';

export function TechnologyCards() {
    return (
        <>
            <section className='techMainSection d-flex flex-column align-items-center justify-content-center'>
                <h1>Learn 4.0 Technologies</h1>
                <p className='mainPara text-center py-4'>Get trained by alumni of IIT's and top companies like Amazon, Microsoft, Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved in Product Development.</p>
                <section className='d-flex flex-column align-items-center'>
                    <div className="TechCardSection row row-cols-1 row-cols-md-2 g-4" id='TechCardId'>
                        <div className="col">
                            <div className="TechCardBorColor1 card">
                                <div className="TechCardBorColor1 card-body">
                                    <h5 className="card-title">Data Scientist</h5>
                                    <p className="card-text">Data scientists gather and analyze large sets of structured and unstructured data</p>
                                </div>
                                <img src="https://cdn-icons-png.flaticon.com/512/6361/6361129.png" className="techImg align-self-end" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card TechCardBorColor2">
                                <div className="card-body TechCardBorColor2">
                                    <h5 className="card-title">IOT Developer</h5>
                                    <p className="card-text">IoT Developers are professionals who can develop, manage and monitor IoT devices.</p>
                                </div>
                                <img src="https://static.javatpoint.com/tutorial/iot/images/iot-devices.png" className="techImg align-self-end" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card TechCardBorColor3">
                                <div className="card-body TechCardBorColor3">
                                    <h5 className="card-title">VR Developer</h5>
                                    <p className="card-text">A VR developer creates completely new digital environment that people can see.</p>
                                </div>
                                <img src="https://img.freepik.com/premium-vector/future-technology-concept-young-man-with-vr-headset-with-touching-vr-interface-trendy-flat-style_116399-636.jpg?w=360" className="techImg align-self-end" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card TechCardBorColor4">
                                <div className="card-body TechCardBorColor4">
                                    <h5 className="card-title">ML Engineer</h5>
                                    <p className="card-text">Machine learning engineers feed data into models defined by data scientists.</p>
                                </div>
                                <img src="https://www.springboard.com/blog/wp-content/uploads/2021/06/what-skills-do-you-need-to-become-a-machine-learning-engineer.jpg" className="techImg align-self-end" alt="..." />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}