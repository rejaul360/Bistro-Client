import React from 'react';
import { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { PacmanLoader } from 'react-spinners';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
         <span  style={{color:'#F000B8'}} className='md:text-3xl p-6 font-bold link link-hover '> <Link to='/login'>Please Login / Sing Up</Link></span>  <PacmanLoader color="#36d7b7" /> 
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;