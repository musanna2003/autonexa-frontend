import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {

    const car = useLoaderData();
    console.log(car)

    return (
        <div className="card bg-base-100 max-w-3xl mx-auto shadow-sm my-16">
            <figure>
                <img
                src={car.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
                alt={car.carModel || "Car"}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Model: {car.carModel}</h2>
                <p>Daily Price : {car.dailyRentalPrice} </p>
                <p>Availability: {car.availability ? "Available" : "Not Available"}</p>
                <p>Booking count: {car.count}</p>
                <p>Discription :{car.description}</p>
                <p>Date Posted: {car.date}</p>
                
                <div className="card-actions w-full ">
                    <button className="btn w-full btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Book Now</button>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <fieldset className="fieldset">
                            <label className="label">From</label>
                            <input type="date" className="input" />
                            <label className="label">To</label>
                            <input type="date" className="input" />
                            <button className="btn btn-neutral mt-4">Confirm Booking</button>
                        </fieldset>
                    </div>
                </div>
                        
            </dialog>
        </div>
    );
};

export default Details;