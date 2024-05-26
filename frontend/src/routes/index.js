import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';

import ForgotPass from '../pages/ForgotPass';
import Sign_up from '../pages/Sign_up';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />
        },

        {
          path: "about",
          element: <About />
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "forgotpass",
          element: <ForgotPass/>
        },
        {
          path: "sign_up",
          element: <Sign_up/>
        },
        {
          path: "products",
          element: <Product/>
        },
        {
          path: "checkout",
          element: <Checkout/>
        }
      ]
    }
  ]
);

export default router;
