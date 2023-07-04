import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularSections from '../PopularSections/PopularSections';
import Fetured from '../Fetured/Fetured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
          <Helmet>
            <title>BISTRO BOSS | Home</title>
          </Helmet>
          <Banner></Banner>
          <Category></Category>
          <ChefService></ChefService>
          <PopularSections></PopularSections>
          <Fetured></Fetured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;