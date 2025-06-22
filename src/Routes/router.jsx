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

const router = createBrowserRouter([
    {
        path : '/',
        Component : Root,
        children: [
            {
                index : true,
                path : "/",
                loader : () => fetch("http://localhost:3000/cars/sort"),
                Component : Home,
            },
            {
                path : "/cars/details/:id",
                loader : ({params}) => fetch(`http://localhost:3000/cars/details/${params.id}`),
                element : <PrivetRoute><Details></Details></PrivetRoute>
            },
            {
                path : "/available",
                loader : () => fetch("http://localhost:3000/cars"),
                element : <AvailableCars></AvailableCars>
            },
            {
                path : "/mycars/:email",
                loader : ({params}) => fetch(`http://localhost:3000/mycars/${params.email}`),
                element : <PrivetRoute><MyCars></MyCars></PrivetRoute>
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