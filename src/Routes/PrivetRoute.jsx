import React, { useContext } from 'react';
import { MyContext } from '../MyContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(MyContext);
    const location = useLocation();
    
    if (loading){
        return <div className=" w-full h-screen flex justify-center items-center">
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if (!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children
};

export default PrivetRoute;