import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdtaeCoffee from './components/UpdtaeCoffee.jsx';

import CoffeeDetails from './components/Navbar/CoffeeDetails.jsx';

import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Cart from './Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Bookings from './components/Bookings.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://online-assignment-server-psi.vercel.app/coffee')
  },
  {

    path: "addCoffee",
    element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
  },


  {
    path: 'coffee/:id',
    element: <PrivateRoute><CoffeeDetails></CoffeeDetails></PrivateRoute>,
    loader: ({ params }) => fetch(`https://online-assignment-server-psi.vercel.app/coffee/${params.id}`)


  },

  {
    path: 'updateCoffee/:id',
    element: <UpdtaeCoffee></UpdtaeCoffee>,
    loader: ({ params }) => fetch(`https://online-assignment-server-psi.vercel.app/coffee/${params.id}`)

  },

  {
    path: '/cart',
    element: <PrivateRoute><Cart></Cart></PrivateRoute>,
    loader: () => fetch('https://online-assignment-server-psi.vercel.app/cart')


  },
  {
    path: '/login',
    element: <Login></Login>

  },
  {
    path: '/register',
    element: <Register></Register>

  },


  {
    path: 'checkout/:id',
    element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
    loader: ({ params }) => fetch(`https://online-assignment-server-psi.vercel.app/services/${params.id}`)  //error
  },

  {

    path: 'bookings',
    element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
  }



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)


