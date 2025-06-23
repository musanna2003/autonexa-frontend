import React, { useContext, useEffect, useState } from 'react';
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router';
import { MyContext } from '../MyContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Tr2 = ({booking, index}) => {


    const {user} = useContext(MyContext);
    const navigate = useNavigate();

    const [from, setFrom] = useState(booking.from);
    const [to, setTo] = useState(booking.to);
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


    const handelUpdate = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const rawData = Object.fromEntries(formData.entries());

        if(rawData.from>=rawData.to){
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
        const total = days * booking.dailyRentalPrice;

        const postData = {
            user: user?.email,
            dailyRentalPrice: booking.dailyRentalPrice,
            booking_id : booking.booking_id,
            from : rawData.from,
            to : rawData.to,
            status : "Pending",
            total : total,
            date: new Date().toISOString().split("T")[0],
        };
        console.log(postData)
        
        //send to db
        axios.patch(`http://localhost:3000/bookings/${booking._id}`, postData)
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
        navigate(`/bookings/${user?.email}`);
        })
        .catch(error => {
        console.error('Error:', error);
        toast.error('Upload failed!');
        });

        document.getElementById(`my_modal_3${booking._id}`).close()

        
    }

    const handelDelete = () =>{

        axios.delete(`http://localhost:3000/bookings/${booking._id}`, {
        })
        .then(response => {
        console.log('Success:', response.data);

        toast.success('Delete successful!', {
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
        })
        .catch(error => {
        console.error('Error:', error);
        toast.error('Delete failed!');
        });

    }


    return (
        <tr>
            <th>
                {index+1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src={booking.carDetails.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
                            alt={booking.carDetails.carModel || "Car"}/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{booking.carDetails.carModel}</div>
                    </div>
                </div>
            </td>
            <td>
                {booking.date}
            </td>
            <td>
                {booking.from}
            </td>
            <td>
                {booking.to}
            </td>
            <td>
                {booking.total}
            </td>
            <td>
                {booking.status}
            </td>
            <th>
                <button className='btn' onClick={()=>document.getElementById(`my_modal_3${booking._id}`).showModal()}><CiEdit /></button>
                <button className='btn' onClick={()=>document.getElementById(`my_modal_5${booking._id}`).showModal()}><CiTrash /></button>

                {/* //delete modal */}
                <dialog id={`my_modal_5${booking._id}`} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure?</h3>
                        <p className="py-4 font-[400]">
                            This action will permanently delete the item. <br />
                            This cannot be undone.
                        </p>
                        <div className="modal-action ">
                            <form className='flex gap-2' method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn ">Cancel</button>
                                <button onClick={handelDelete} className="btn btn-error ">Delete</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                {/* // edit modal */}
                <dialog id={`my_modal_3${booking._id}`} className="modal">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="">
                                <p>You are booking {booking.carDetails.carModel}</p>
                                <p>per day : {booking.carDetails.dailyRentalPrice} </p>
                            </div>
                            <form onSubmit={handelUpdate} className="fieldset">
                                <label className="label">From</label>
                                <input type="date" className="input" name='from' value={from} onChange={(e) => setFrom(e.target.value)} />
                                <label className="label">To</label>
                                <input type="date" className="input" name='to' value={to} onChange={(e) => setTo(e.target.value)} />
                                <div className="text-lg font-[600]">Total: <span className='text-green-500'>{totalDays*booking.carDetails.dailyRentalPrice}</span> BDT</div>
                                <button className="btn btn-neutral mt-4">Update Booking</button>
                            </form>
                        </div>
                    </div>        
                </dialog>
                
            </th>
        </tr>
    );
};

export default Tr2;