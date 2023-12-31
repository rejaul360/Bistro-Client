import React from 'react';
import { useContext } from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';


const Navbar = () => {

    const [isAdmin] = useAdmin()
    console.log(isAdmin);
    const { user, logOut } = useContext(AuthContext)
    const[cart] = useCart()

    const handleLogOut = e => {
        logOut()
            .then(() => {
               
             })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        {/* <li className='text-white'><Link to='/'>Home</Link></li> */}
        <li className='text-white'><Link to='/menu'>Our_Menu</Link></li>
        <li className='text-white'><Link to='/order/salad'>Order_Food</Link></li>
        {/* <li className='text-white'><Link to="/secret">Secret</Link></li> */}
        {/* <Link><li className='text-white'><Link to="/dashboard/adminhome">Secret</Link></li></Link> */}

        {
            isAdmin  ?   <li className='text-white'><Link to='/dashboard/adminhome'>Dashboard</Link></li>
            :
            <li className='text-white'><Link to='/dashboard/userhome'>Dashboard</Link></li>
            
           
        }


        <li className='text-white'><Link to="dashboard/mycart">
            <button className="btn gap-2">
                <FaShoppingCart />
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></li>
        {
            user ? <>
                <li><Link><button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></Link></li>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
        <li className='text-white'><Link to='/singup'>Singup</Link></li>
    </>

    return (
        <div>
            <div className="navbar sm:fixed fixed z-10 bg-opacity-50 p-4 text-white bg-black  max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl"><Link to='/'>RASTURANT</Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                <span>{user?.photoURL ?
                        <div className="tooltip  tooltip-secondary tooltip-animated" data-tip={user?.displayName}>
                            <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={user?.photoURL} alt='' />
                        </div>
                        :
                        <FaUserCircle className='text-[25px] ml-4'></FaUserCircle>
                    }</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;