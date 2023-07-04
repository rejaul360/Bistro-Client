import React from 'react';

const MenuItems = ({item}) => {
    const {image,name,price,recipe}= item
    return (
        <div className='flex space-x-8 py-4'> 
            <img style={{borderRadius: '0 150px 150px 150px' }} className='w-[250px]' src={image} alt="image" />
            <div className='mt-10'>
                <h1 className='uppercase'>{name}</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500 mt-10 text-xl font-bold' >${price}</p>
        </div>
    );
};

export default MenuItems;