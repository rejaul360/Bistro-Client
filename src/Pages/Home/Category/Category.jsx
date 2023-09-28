import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper";

// import slider images;
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <section>
                <SectionTitle
                    subHeading={'---From 11:00am to 10:00pm---'}
                    heading={'ORDER ONLINE'}
                >
                </SectionTitle>
            </section>
            <div className='py-6'>
                {/* <div>
                    <div className="flex flex-col w-full py-4">
                        <div className="text-center"><p className='text-yellow-500 text-center'>---From 11:00am to 10:00pm---</p></div>
                        <div className="divider w-1/3 mx-auto"></div>
                        <div className=""><h3 className='text-center font-bold text-3xl'>ORDER ONLINE</h3></div>
                        <div className="divider w-1/3 mx-auto"></div>
                    </div>
                </div> */}
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-6"
                >
                    <SwiperSlide><img src={slide1} alt="" /><h3 className='text-black font-bold uppercase text-4xl -mt-16'>Salads</h3></SwiperSlide>

                    <SwiperSlide><img src={slide3} alt="" /><h3 className='text-black font-bold uppercase text-4xl -mt-16'>Desserts</h3></SwiperSlide>
                    <SwiperSlide><img src={slide4} alt="" /><h3 className='text-black font-bold uppercase text-4xl -mt-16'>Soups</h3></SwiperSlide>
                    <SwiperSlide><img src={slide5} alt="" /><h3 className='text-black font-bold uppercase text-4xl -mt-16'>Salads</h3></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /><h3 className='text-black font-bold uppercase text-4xl -mt-16'>Pizza</h3></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;