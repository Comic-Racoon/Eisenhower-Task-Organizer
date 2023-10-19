import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home'
import Contact from '../components/Contact'
import Root from '../components/Root'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true
        },
        {
            path: "/contact",
            element: <Contact />
        }
      ],
    },
  ]);

export default router;