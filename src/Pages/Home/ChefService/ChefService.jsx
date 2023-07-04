import React from 'react';
// import chef from '../../../assets/home/chef-service.jpg'
import './ChefService.css'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const ChefService = () => {
    return (
        <div className='chef-items bg-fixed py-14 pt-8 my-20'>
            <section>
            <SectionTitle subHeading={'Our Chef Services'} heading={'From Our Smart Chef'}></SectionTitle>
            </section>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 pb-20 pt-12 px-36 w-1/2 mx-auto">
                <div>  
                    <h3 className='text-white text-3xl text-center'>Bistro Boss</h3>
                    <p className='text-white'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p></div>
            </div>
        </div>
    );
};

export default ChefService;