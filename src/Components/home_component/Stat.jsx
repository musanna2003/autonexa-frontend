import React from 'react';
import CountUp from 'react-countup';

const Stat = () => {
    return (
        <div className='w-[90vw] md:w-[90vw] mx-auto space-y-10'>
            <div className="stats stats-vertical w-full md:stats-horizontal shadow">

                <div className="stat">
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="stat-title">Total Cars</div>
                        <div className="stat-value">
                            <CountUp start={0} end={199} duration={2} enableScrollSpy scrollSpyDelay={100} />+
                        </div>
                        <div className="stat-desc">Listed for rent</div>
                    </div>
                </div>

                <div className="stat">
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="stat-title">Successful Bookings</div>
                        <div className="stat-value">
                            <CountUp start={0} end={999} duration={2} enableScrollSpy scrollSpyDelay={100} />
                        </div>
                        <div className="stat-desc">Made by customers</div>
                    </div>
                </div>

                <div className="stat">
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="stat-title">Customer Satisfaction Rate</div>
                        <div className="stat-value">
                            <CountUp start={0} end={90} duration={2} enableScrollSpy scrollSpyDelay={100} />%
                        </div>
                        <div className="stat-desc">Positive feedback</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stat;
