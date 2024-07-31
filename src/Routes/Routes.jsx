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
          path:'cart',
          element:<Cart />
        }
      ]
    }
  ]);