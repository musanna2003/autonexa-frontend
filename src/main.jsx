import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router, RouterProvider } from 'react-router'
import Home from './Pages/Home.jsx'
import router from './Routes/Router.jsx'
import { MyProvider } from './MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
  </StrictMode>,
)
