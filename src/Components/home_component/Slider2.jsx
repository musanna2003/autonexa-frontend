import React from 'react';

const Slider2 = () => {
    return (
        <div className="w-[90vw] md:w-[90vw] mx-auto ">
            
            <div
                className="hero h-[35vw] rounded-2xl"
                style={{
                    backgroundImage:
                    "url(https://images.pexels.com/photos/9661356/pexels-photo-9661356.jpeg)",
                }}
                >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                    <h1 className="mb-5 text-2xl md:text-5xl lg:text-7xl font-bold">Luxury cars at $99/day this holiday season!</h1>
                    <button className='btn'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider2;