import React from 'react';
import './WeProvide.css'

const WeProvide = () => {
    return (
        <div className='counter-section'>
            <h2 className='text-center'>We <span className='primary-color'>Provide</span></h2>
            <div className='container d-flex align-items-center justify-content-center gap-5 '>
                <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                    <div className='text-center'>

                        <div className='py-5'>
                            <h1 className='primary-color fs-1'><i class="far fa-credit-card"></i></h1>
                            <h5 className='fw-bold'>Buy From online</h5>
                            <p>You can buy our Bicycles from our website by using your card</p>
                        </div>
                    </div>
                    <div className=' border-end border-start px-4 text-center'>

                        <div className='py-5'>
                            <h1 className='primary-color fs-1'><i class="fas fa-medal"></i></h1>
                            <h5 className='fw-bold'>Top Bicycles </h5>
                            <p>We sell Top Bicycles which will suit with your brand</p>
                        </div>
                    </div>
                    <div className='text-center'>

                        <div className='py-5'>
                            <h1 className='primary-color fs-1'><i class="fas fa-tools"></i></h1>
                            <h5 className='fw-bold'>1 year Free service</h5>
                            <p>We provide 1 year service with no cost</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeProvide;