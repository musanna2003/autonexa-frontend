import React from 'react';

const Addcars = () => {
    return (
        <div>
            <div className="">
                <div className="card bg-base-100 w-full max-w-2xl mx-auto shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Car Model</label>
                            <input type="text" className="input w-full" placeholder="Car Model" />

                            <label className="label">Daily Rental Price</label>
                            <input type="number" className="input w-full" placeholder="Daily Rental Price" />

                            <label className="label">Availability</label>
                            <select defaultValue="Pick a color" className="select w-full">
                                <option disabled={true}WS>Select Availability</option>
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>

                            <label className="label">Vehicle Registration Number</label>
                            <input type="text" className="input w-full" placeholder="Vehicle Registration Number" />

                            <label className="label">Featurs</label>
                            <textarea className="textarea h-24 w-full" placeholder="features"></textarea>

                            <label className="label">Description</label>
                            <textarea className="textarea h-24 w-full" placeholder="Description"></textarea>
                            
                            <label className="label">Image url </label>
                            <input type="text" className="input w-full" placeholder="Image url " />

                            <label className="label">Location</label>
                            <input type="text" className="input w-full" placeholder="Location" />

                            <button className="btn btn-neutral mt-4">Add Car</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addcars;