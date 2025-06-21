import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            
            <div className='min-h-screen flex flex-col justify-between'>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;