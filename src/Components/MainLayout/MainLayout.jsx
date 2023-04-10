import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import './MainLayout.css'

const MainLayout = () => {
    let location = useLocation();
    // console.log(location);
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;