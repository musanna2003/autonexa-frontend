import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { MyContext } from '../MyContext';
import axios from 'axios';

const Nav = () => {

    const {user,signOutUser} = useContext(MyContext);
    const navigate = useNavigate();
    const handelLogout = () =>{
        signOutUser().then(() => {
            // Sign-out successful.
            axios.post(`http://localhost:3000/logout`, {}, { withCredentials: true })
            .then(res => console.log('Logged out', res));
           
            navigate("login")
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });;
    }

    const nav = <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/available">Available Cars</NavLink></li>
                    {
                        user && <><li><NavLink to="/addcar">Add Car</NavLink></li>
                    <li><NavLink to={`/mycars/${user?.email}`}>My Cars</NavLink></li>
                    <li><NavLink to={`/bookings/${user?.email}`}>My Bookings</NavLink></li></>
                    }
                </> 

    return (
        <div className="navbar bg-primary/80 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <a href='/' className="btn btn-ghost text-xl">AutoNexa</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        nav
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            nav
                        }
                    </ul>
                </div>
                {
                    !user?
                        <a href='/login' className="btn btn-ghost hover:bg-black/5 hover:border-0">
                            Login
                        </a>
                        :
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="mx-[1vw]">
                                    
                                        <img className=" w-10 h-10 rounded-full" src={ user.photoURL || "https://i.ibb.co.com/NdFHxWHB/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"} />
                                   
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a href="">{user.displayName || "User"}</a></li>
                                    <li><a onClick={handelLogout} >Logout</a></li>
                                </ul>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Nav;