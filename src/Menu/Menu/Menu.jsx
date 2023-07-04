import React from 'react';
import { Helmet } from 'react-helmet-async';
// import Cover from '../../Pages/Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

import useMenu from '../../Hooks/UseMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
// import PopularSections from '../../Pages/Home/PopularSections/PopularSections';

const Menu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Menu</title>
            </Helmet>
            {/* Main Cover */}
            <SectionTitle
                subHeading="Don't miss"
                heading="Todays Offerd"
            ></SectionTitle>
            {/* Offerd menu items */}
            <CategoryMenu item={offered}></CategoryMenu>
            {/* dessert menu items */}
            <CategoryMenu item={dessert} title='Desserts' img={dessertImg}></CategoryMenu>
            <CategoryMenu item={pizza} title='pizza' img={pizzaImg}></CategoryMenu>
            <CategoryMenu item={soup} title='Soup' img={soupImg}></CategoryMenu>
            <CategoryMenu item={salad} title='salad' img={saladImg}></CategoryMenu>

        </div>
    );
};

export default Menu;