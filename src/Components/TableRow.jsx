import axios from 'axios';
import React, { useContext } from 'react';
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { MyContext } from '../MyContext';

const TableRow = ({car, index}) => {
    const {user} = useContext(MyContext);
    const navigate = useNavigate();

    const handelDelete = () =>{

        axios.delete(`http://localhost:3000/cars/details/${car._id}`, {
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

        navigate(`/mycars/${user?.email}`);
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
                            src={car.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
                            alt={car.carModel || "Car"}/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{car.carModel}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{car.availability ? "Available" : "Not Available"}</span>
            </td>
            <td>
                <span>{car.count}</span>
            </td>
            <td>
                <span className='text-green-500'>{car.dailyRentalPrice} taka</span>
            </td>
            <td>
                <span >{car.date}</span>
            </td>
            <th>
                <Link to={`/cars/edit/${car._id}`} className='btn'><CiEdit /></Link>
                <button className='btn' onClick={()=>document.getElementById('my_modal_5').showModal()}><CiTrash /></button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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
            </th>
        </tr>
    );
};

export default TableRow;