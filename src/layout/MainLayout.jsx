import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../views/shared/Navbar';
import Footer from '../views/shared/Footer';


const MainLayout = () => {
    return (
        <div className='container'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;