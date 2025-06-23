import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className="">
            <div
                className="hero min-h-screen rounded-b-2xl"
                style={{
                    backgroundImage:
                    "url(https://images.pexels.com/photos/30145511/pexels-photo-30145511.jpeg)",
                }}
                >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                    <h1 className="mb-5 text-7xl font-bold">Drive Your Dreams Today!</h1>
                    <Link to={"/available"} className='btn btn-primary'>Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;