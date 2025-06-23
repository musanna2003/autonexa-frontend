import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/Animation - 1750697933912.json";

const LoadingPage = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className="w-xs">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
        </div>
    );
};

export default LoadingPage;