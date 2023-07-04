import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './Fetured.css'
import featuredImg from '../../../assets/home/featured.jpg'

const Fetured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading='Check it Out' heading='From Our Speacial Dish'></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className='font-semibold'>Aug 20, 2029</p>
                    <p className='font-semibold uppercase'>Where can i get some?</p>
                    <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;