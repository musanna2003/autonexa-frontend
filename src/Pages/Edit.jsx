import React, { useContext } from 'react';
import { MyContext } from '../MyContext';
import { useLoaderData, useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const Edit = () => {

    const {user} = useContext(MyContext);
    const navigate = useNavigate();

    const car = useLoaderData();

    const handelUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const rawData = Object.fromEntries(formData.entries());

        const postData = {
            user: user?.email,
            author: user?.displayName,
            carModel: rawData.model,
            dailyRentalPrice: parseFloat(rawData.price),
            availability: rawData.availability === "Available",
            vehicleRegistrationNumber: rawData.reg,
            features: rawData.featurs.split(',').map(item => item.trim()),
            description: rawData.details,
            imageUrl: rawData.img,
            location: rawData.location,
            count: 0,
            date: car.date,
        };
        console.log(postData)
        
        //send to db
        axios.patch(`http://localhost:3000/cars/details/${car._id}`, postData ,{ withCredentials: true })
        .then(response => {
        console.log('Success:', response.data);
        
        toast.success('Update successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigate(`/mycars/${user?.email}`);
        })
        .catch(error => {
        console.error('Error:', error);
        toast.error('Upload failed!');
        });

        
    };

    return (
        <div>
            <div className="">
                <div className="card bg-base-100 w-full max-w-2xl mx-auto shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handelUpdate} className="fieldset">
                            <label className="label">Car Model</label>
                            <input type="text" className="input w-full" placeholder="Car Model" defaultValue={car.carModel} name='model' />

                            <label className="label">Daily Rental Price</label>
                            <input type="number" className="input w-full" placeholder="Daily Rental Price" defaultValue={car.dailyRentalPrice} name='price' />

                            <label className="label">Availability</label>
                            <select defaultValue={car.availability} className="select w-full" name='availability'>
                                <option disabled={true}>Select Availability</option>
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>

                            <label className="label">Vehicle Registration Number</label>
                            <input type="text" className="input w-full" placeholder="Vehicle Registration Number" defaultValue={car.vehicleRegistrationNumber} name='reg' />

                            <label className="label">Featurs</label>
                            <textarea className="textarea h-24 w-full" placeholder="features" defaultValue={car.features} name='featurs'></textarea>

                            <label className="label">Description</label>
                            <textarea className="textarea h-24 w-full" placeholder="Description" defaultValue={car.description} name='details'></textarea>
                            
                            <label className="label">Image url </label>
                            <input type="text" className="input w-full" placeholder="Image url" defaultValue={car.imageUrl} name='img' />

                            <label className="label">Location</label>
                            <input type="text" className="input w-full" placeholder="Location" defaultValue={car.location} name='location' />

                            <button className="btn btn-neutral mt-4">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;