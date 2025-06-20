import React from 'react';

const Hero = () => {
    return (
        <div className="w-[90vw] md:w-[90vw] mx-auto ">
            <div
                className="hero min-h-screen rounded-2xl"
                style={{
                    backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
                >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                    <h1 className="mb-5 text-7xl font-bold">Drive Your Dreams Today!</h1>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;