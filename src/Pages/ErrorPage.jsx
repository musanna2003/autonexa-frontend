import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/Animation - 1750697642918.json";
import { Link } from 'react-router';

const ErrorPage = () => {
    document.title = `Error | AutoNexa`;
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>
            <div className=" flex flex-col justify-center items-center ">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
                <Link className='btn w-fit btn-primary' to={"/"}>Go To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;