import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Singup from "../pages/Singup/Singup";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Privateroute from './Privateroutes'
import AllUsers from "../pages/Dashboard/AllUsers/Allusers";
import AddItems from "../pages/Dashboard/Additems/AddItems";
import AdminRoute from "./AdminRoute";
import MannageItem from "../pages/Dashboard/ManageItem/MannageItem";
import UpdateItem from "../pages/Dashboard/Updateitem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ManageBokking from "../pages/Dashboard/ManageBooking/ManageBokking";
import Review from "../pages/Dashboard/review/Review";
import UserHistory from "../pages/Dashboard/userHitory/UserHistory";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'menu', 
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:'singup',
          element:<Singup />
        }

      ]
    },
    {
      path:'dashboard',
      element:<Privateroute><Dashboard /></Privateroute>,
      children:[
        {
          path: 'userHome',
          element: <UserHome />
        },
        {
          path:'cart',
          element:<Cart />
        },
        {
         path:'payment',
         element:<Payment />
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory />
        },
        {
          path: 'review',
          element: <Review />
        },
        {
          path: 'history',
          element: <UserHistory />
        },


         // admin routes
          {
            path: 'adminHome',
            element: <AdminRoute><AdminHome /></AdminRoute>
          },
         {
          path:'addItems',
          element:<AdminRoute><AddItems /></AdminRoute> 
         },
         {
          path: 'manageItems',
          element: <AdminRoute><MannageItem /></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem /></AdminRoute>,
          loader: ({params}) => fetch(`https://resturent-server-gamma.vercel.app/menu/${params.id}`)
        },
         {
          path: 'users',
          element:<AdminRoute><AllUsers /></AdminRoute> 
        },
        {
          path: 'bookings',
          element:<AdminRoute><ManageBokking /></AdminRoute>
        }

      ]
    }
  ]);