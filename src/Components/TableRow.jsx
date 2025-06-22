import React from 'react';
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

const TableRow = ({car, index}) => {
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
                <button className='btn'><CiEdit /></button>
                <button className='btn' onClick={()=>document.getElementById('my_modal_5').showModal()}><CiTrash /></button>
            </th>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action ">
                        <form className='flex gap-2' method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn ">Cancel</button>
                            <button className="btn btn-error ">Delete</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </tr>
    );
};

export default TableRow;