import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PublicHomePage from '../views/pages/PublicHomePage';
import MainLayout from '../layout/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <PublicHomePage></PublicHomePage>
            },
            {
                path: '/home',
                element: <PublicHomePage></PublicHomePage>
            },
         
        ]
    },
  
   
    
   /*  {
        path: "*", element: <WrongRoute> </WrongRoute>
    }, */
])
export default router;