import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation1 from "../../assets/Animation - 1750812819425.json";
import groovyWalkAnimation2 from "../../assets/Animation - 1750814017757.json";
import groovyWalkAnimation4 from "../../assets/Animation - 1750813077545.json";
import groovyWalkAnimation3 from "../../assets/Animation - 1750813163355.json";

const Why_Choose_Us = () => {
    
    return (
        <div className='w-[90vw] md:w[90vw] xl:w-[75vw]  mx-auto space-y-10'>
            <div className='text-4xl font-bold'>Why Choose Us</div>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-4">


                <div className=" card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className=" h-[50] md:h-[70%]">
                            <Lottie className='w-full h-full' animationData={groovyWalkAnimation1} loop={true} />
                        </div>
                        <div className="h-[50] md:h-[30%]">
                            <h2 className="card-title">Wide Variety of Cars</h2>
                            <p>From budget-friendly options to luxury vehicles.</p>
                        </div>
                        
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className="h-[50%] md:h-[70%]">
                            <Lottie className='w-full h-full' animationData={groovyWalkAnimation2} loop={true} />
                        </div>
                        <div className="h-[50%] md:h-[30%]">
                            <h2 className="card-title">Affordable Prices</h2>
                            <p>Competitive daily rates you can count on.</p>
                        </div>
                        
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className="h-[50%] md:h-[70%]"><Lottie className='w-full h-full' animationData={groovyWalkAnimation3} loop={true} /></div>
                        <div className="h-[50%] md:h-[30%]"><h2 className="card-title">Easy Booking Process</h2>
                            <p>Seamlessly book your ride in just a few clicks.</p>
                        </div>
                        
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className="h-[50%] md:h-[70%]"><Lottie className='w-full h-full' animationData={groovyWalkAnimation4} loop={true} /></div>
                        <div className="h-[50%] md:h-[30%]">
                            <h2 className="card-title">Customer Support</h2>
                            <p>24/7 assistance for all your queries.</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Why_Choose_Us;