import React from 'react';
import MenuItems from '../../Pages/Shared/MenuItems/MenuItems';
import Cover from '../../Pages/Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const CategoryMenu = ({ item, title, img }) => {
    return (
        <div className='pt-10'>
        {
            title && <Cover img={img} title={title}></Cover>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 my-6 md:my-12 lg:my-16">
            {
                item.map(item => <MenuItems
                    key={item._id}
                    item={item}
                ></MenuItems>)
            }
        </div>
        <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </Link>
    </div>
    
    );
};

export default CategoryMenu;