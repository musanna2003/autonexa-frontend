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
    const isRouting = navigation.state === "loading";

    return (
        <div className="">
            <ScrollToTop />
            <div className='min-h-screen flex flex-col justify-between relative'>

                

                <div className="">
                    <StickyNavbar />
                    {isRouting && (
                        <div className="">
                            <LoadingPage />
                        </div>
                    )}

                    <Suspense fallback={<LoadingPage />}>
                        <Outlet />
                    </Suspense>
                </div>

                <Footer />
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default Root;
