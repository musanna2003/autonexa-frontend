import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

console.log(motion)

const Card = ({car}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='h-[50%]'>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={car.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
                    alt={car.carModel || "Car"}
                    className="w-full h-60 object-cover rounded-md"
                />
            </figure>
            <div className="card-body h-[50%]">
                <h2 className="card-title">Model: {car.carModel}</h2>
                <p>Daily Price : {car.dailyRentalPrice} </p>
                <p>Availability: {car.availability ? "Available" : "Not Available"}</p>
                <p>Booking count: {car.count}</p>
                <p>Date Posted: {car.date}</p>
                <div className="card-actions w-full ">
                    <Link to="/details" className="btn w-full btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;