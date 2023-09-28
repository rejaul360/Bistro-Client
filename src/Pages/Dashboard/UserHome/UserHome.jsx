import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserHome = () => {
    return (
        <div>
            <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width:'auto' }} className='text-center font-bold text-2xl'><Link to='/dashboard/mycart'> 
            <FaShoppingCart></FaShoppingCart> Click Card</Link></h2>

        </div>

    );
};

export default UserHome;