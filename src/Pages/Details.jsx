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