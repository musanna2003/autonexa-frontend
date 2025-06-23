import React from 'react';
import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

const Tr2 = ({booking, index}) => {
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
                <button className='btn'><CiEdit /></button>
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
                                <button className="btn btn-error ">Delete</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </th>
        </tr>
    );
};

export default Tr2;