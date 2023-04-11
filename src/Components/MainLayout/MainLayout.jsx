import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import './MainLayout.css'
import Footer from '../Footer/Footer';

const MainLayout = () => {
    let location = useLocation();
    // console.log(location);
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer/> 
           
            
        </div>
    );
};

export default MainLayout;