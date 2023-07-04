import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const Main = () => {
    const location = useLocation()
    const noHewaderFooter = location.pathname.includes('login') ||  location.pathname.includes('singup')
    return (
        <div>
            {noHewaderFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHewaderFooter ||   <Footer></Footer>}
        </div>
    );
};

export default Main;