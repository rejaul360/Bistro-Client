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
        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 pb-8 md:pb-20 pt-8 md:pt-12 px-4 md:px-36">
          <div className="md:w-1/2">
            <h3 className='text-white text-2xl md:text-3xl text-center'>Bistro Boss</h3>
            <p className='text-white text-sm md:text-base text-center mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
      
    );
};

export default ChefService;