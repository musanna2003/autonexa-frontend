import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AvailableCars from '../Pages/AvailableCars';
import Details from '../Pages/Details';
import Addcars from '../Pages/Addcars';
import PrivetRoute from './PrivetRoute';
import MyCars from '../Pages/MyCars';
import MyBookings from '../Pages/MyBookings';
import ErrorPage from '../Pages/ErrorPage';
import Edit from '../Pages/Edit';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const router = createBrowserRouter([
    {
        path : '/',
        errorElement: <ErrorPage></ErrorPage>,
        Component : Root,
        children: [
            {
                index : true,
                path : "/",
                loader : () => fetch("https://ph-assignment-11-backend.vercel.app/cars"),
                Component : Home,
            },
            {
                path : "/cars/details/:id",
                loader : ({params}) => fetch(`https://ph-assignment-11-backend.vercel.app/cars/details/${params.id}`),
                element : <PrivetRoute><Details></Details></PrivetRoute>
            },
            {
                path : "/cars/edit/:id",
                loader : ({params}) => fetch(`https://ph-assignment-11-backend.vercel.app/cars/details/${params.id}`),
                element : <PrivetRoute><Edit></Edit></PrivetRoute>
            },
            {
                path : "/available",
                element : <AvailableCars></AvailableCars>
            },
            {
                path: "/mycars/:email",
                element: <PrivetRoute><MyCars /></PrivetRoute>
            },

            {
                path : "/bookings/:email",
                element : <PrivetRoute><MyBookings></MyBookings></PrivetRoute>
            },
            {
                path : "/addcar",
                element : <PrivetRoute><Addcars></Addcars></PrivetRoute>
            },
            {
                path : '/login',
                Component : Login
            },
            {
                path : "/register",
                Component : Register
            },
            {
                path : "/about",
                Component : About
            },
            {
                path : "/contact",
                Component : Contact
            }
        ]
    }
])

export default router;