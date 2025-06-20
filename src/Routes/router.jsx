import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AvailableCars from '../Pages/AvailableCars';
import Details from '../Pages/Details';

const router = createBrowserRouter([
    {
        path : '/',
        Component : Root,
        children: [
            {
                index : true,
                path : "/",
                // loader : () => fetch("https://phassignment102.vercel.app/recipes/sort"),
                Component : Home,
            },
            {
                path : "/details",
                Component: Details
            },
            {
                path : "/available",
                Component : AvailableCars
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