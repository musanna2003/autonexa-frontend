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

const router = createBrowserRouter([
    {
        path : '/',
        errorElement: <ErrorPage></ErrorPage>,
        Component : Root,
        children: [
            {
                index : true,
                path : "/",
                loader : () => fetch("http://localhost:3000/cars"),
                Component : Home,
            },
            {
                path : "/cars/details/:id",
                loader : ({params}) => fetch(`http://localhost:3000/cars/details/${params.id}`),
                element : <PrivetRoute><Details></Details></PrivetRoute>
            },
            {
                path : "/cars/edit/:id",
                loader : ({params}) => fetch(`http://localhost:3000/cars/details/${params.id}`),
                element : <PrivetRoute><Edit></Edit></PrivetRoute>
            },
            {
                path : "/available/:sort",
                loader : ({params}) => fetch(`http://localhost:3000/cars/${params.sort}`),
                element : <AvailableCars></AvailableCars>
            },
            {
                path : "/mycars/:email",
                loader : ({params}) => fetch(`http://localhost:3000/mycars/${params.email}`),
                element : <PrivetRoute><MyCars></MyCars></PrivetRoute>
            },
            {
                path : "/bookings/:email",
                loader : ({params}) => fetch(`http://localhost:3000/bookings/${params.email}`),
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
            }
        ]
    }
])

export default router;