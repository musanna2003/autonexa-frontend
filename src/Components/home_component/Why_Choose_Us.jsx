import React from 'react';

const Why_Choose_Us = () => {
    
    return (
        <div className='w-[90vw] md:w[90vw] xl:w-[75vw]  mx-auto space-y-10'>
            <div className='text-4xl font-bold'>Why Choose Us</div>
            <div className="grid grid-cols-2 md:grid-cols-4">


                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Wide Variety of Cars</h2>
                        <p>From budget-friendly options to luxury vehicles.</p>
                        
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Affordable Prices</h2>
                        <p>Competitive daily rates you can count on.</p>
                        
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Easy Booking Process</h2>
                        <p>Seamlessly book your ride in just a few clicks.</p>
                        
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Customer Support</h2>
                        <p>24/7 assistance for all your queries.</p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Why_Choose_Us;