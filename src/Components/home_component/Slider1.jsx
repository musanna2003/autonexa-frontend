import React from 'react';
import { Link } from 'react-router';

const Slider1 = () => {
    return (
        <div className="w-[90vw] md:w-[90vw] mx-auto ">
            <div
                className="hero h-[35vw] rounded-2xl"
                style={{
                    backgroundImage:
                    "url(https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg)",
                }}
                >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-2xl md:text-5xl lg:text-7xl font-bold">Get 15% off for weekend rentals!</h1>
                        <Link to={"/available"} className='btn'>Book Now</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Slider1;