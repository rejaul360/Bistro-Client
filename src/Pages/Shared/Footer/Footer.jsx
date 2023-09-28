import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-800 text-white ">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover"><Link to='/menu'>Our_Food</Link></a>
                    <a className="link link-hover"><Link to='/order/salad'>Order_Food</Link></a>
                    <a className="link link-hover"><Link to=''> </Link> Dashboard</a>
                    <a className="link link-hover">Cart</a>
                </nav>
                <nav>
                    <header className="footer-title">Rasturant</header>
                    <a className="link link-hover">Best Food</a>
                    <a className="link link-hover">Smart Chief</a>
                    <a className="link link-hover">Review</a>
                    <a className="link link-hover"></a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input  type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button style={{backgroundColor:'#F000B8'}} className="btn  absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;