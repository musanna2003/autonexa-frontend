import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/Animation - 1750697642918.json";

const ErrorPage = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <div className="">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
        </div>
    );
};

export default ErrorPage;