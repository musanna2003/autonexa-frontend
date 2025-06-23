import React, { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../Routes/ScrollToTop';
import StickyNavbar from '../Components/StickyNavbar';
import LoadingPage from './LoadingPage';

const Root = () => {
    
    const navigation = useNavigation();
    if (navigation.state === "loading"){
        return <LoadingPage></LoadingPage>
    }

    return (
        <div>
            <div className='min-h-screen flex flex-col justify-between'>
                <ScrollToTop />
                <StickyNavbar></StickyNavbar>

                <Suspense fallback={<LoadingPage />}>
                    <Outlet />
                </Suspense>

                <Footer></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;