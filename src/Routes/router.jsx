import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AvailableCars from '../Pages/AvailableCars';
import Details from '../Pages/Details';
import Addcars from '../Pages/Addcars';

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
                path : "/details/:id",
                loader : ({params}) => fetch(`http://localhost:3000/cars/${params.id}`),
                Component: Details
            },
            {
                path : "/available",
                loader : () => fetch("http://localhost:3000/cars"),
                Component : AvailableCars
            },
            {
                path : "/addcar",
                element : <Addcars></Addcars>
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