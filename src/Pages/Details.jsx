import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { MyContext } from '../MyContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Details = () => {

    const car = useLoaderData();

    document.title = `${car.carModel} | AutoNexa`;

    const {user} = useContext(MyContext);
    const navigate = useNavigate();

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [totalDays, setTotalDays] = useState(0);

    useEffect(() => {
        if (from && to) {
            const start = new Date(from);
            const end = new Date(to);
            const diff = end - start;
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
            setTotalDays(days > 0 ? days : 0);
        }
    }, [from, to]);

    const handelbooking = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const rawData = Object.fromEntries(formData.entries());

        if(rawData.from>rawData.to){
            return(toast.error("Invalide date. Please inter a valid date.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    }))
        }

        const start = new Date(rawData.from);
        const end = new Date(rawData.to);
        const diff = end - start; // difference in milliseconds
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        const total = days * car.dailyRentalPrice;

        const postData = {
            user: user?.email,
            dailyRentalPrice: car.dailyRentalPrice,
            booking_id : car._id,
            from : rawData.from,
            to : rawData.to,
            status : "Pending",
            total : total,
            date: new Date().toISOString().split("T")[0],
        };
        console.log(postData)
        
        //send to db
        axios.post('https://ph-assignment-11-backend.vercel.app/bookings', postData,{ withCredentials: true })
        .then(response => {
        console.log('Success:', response.data);
        toast.success('Booking successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigate(`/bookings/${user?.email}`);
        axios.patch(`https://ph-assignment-11-backend.vercel.app/cars/count/${car._id}?action=increase`)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
        })
        .catch(error => {
        console.error('Error:', error);
        toast.error('Upload failed!');
        });

        
    };

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
                        <div className="">
                            <p>You are booking {car.carModel}</p>
                            <p>per day : {car.dailyRentalPrice} </p>
                        </div>
                        <form onSubmit={handelbooking} className="fieldset">
                            <label className="label">From</label>
                            <input type="date" className="input" name='from' value={from} onChange={(e) => setFrom(e.target.value)} />
                            <label className="label">To</label>
                            <input type="date" className="input" name='to' value={to} onChange={(e) => setTo(e.target.value)} />
                            <div className="text-lg font-[600]">Total: <span className='text-green-500'>{totalDays*car.dailyRentalPrice}</span> BDT</div>
                            <button className="btn btn-neutral mt-4">Confirm Booking</button>
                        </form>
                    </div>
                </div>
                        
            </dialog>
        </div>
    );
};

export default Details;