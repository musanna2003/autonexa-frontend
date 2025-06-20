import React from 'react';

const Details = () => {
    return (
        <div className="card bg-base-100 max-w-3xl mx-auto shadow-sm my-16">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Model: </h2>
                <p>Daily Price: </p>
                <p>Availability:</p>
                <p>Booking count:</p>
                <p>Date Posted:</p>
                <div className="card-actions w-full ">
                    <button className="btn w-full btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;