import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../Routes/ScrollToTop';
import StickyNavbar from '../Components/StickyNavbar';

const Root = () => {
    return (
        <div>
            
            <div className='min-h-screen flex flex-col justify-between'>
                <ScrollToTop />
                <StickyNavbar></StickyNavbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;