import React from 'react';

const Slider1 = () => {
    return (
        <div className="w-[90vw] md:w-[90vw] mx-auto ">
            <div
                className="hero h-[35vw] rounded-2xl"
                style={{
                    backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
                >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-2xl md:text-5xl lg:text-7xl font-bold">Get 15% off for weekend rentals!</h1>
                        <button className='btn'>Book Now</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Slider1;