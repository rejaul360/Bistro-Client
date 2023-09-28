import React from 'react';

const MenuItems = ({ item }) => {
    const { image, name, price, recipe } = item
    return (
        <div >
            {/* <div className="d-card flex flex-col md:flex-row lg:flex-row w-full">
                <img
                    style={{ borderRadius: '0 150px 150px 150px' }}
                    className="w-[250px] md:w-[350px] lg:w-[450px] md:order-1 lg:order-1 "
                    src={image}
                    alt="image"
                />
                <div className=" md:mt-24 md:p-10 md:order-3 lg:order-3 md:flex-grow lg:flex-grow mt-6">
                    <h1 className="uppercase text-lg md:text-xl lg:text-xl font-bold">{name}</h1>
                    <p>{recipe}</p>
                    <p
                        style={{ color: '#FF0066' }}
                        className="mt-4 text-base md:text-xl lg:text-xl font-bold"
                    >
                        ${price}
                    </p>
                </div>
            </div> */}



            <div className="card w-96 bg-base-100 shadow-xl " 
            data-aos="fade-up"
            data-aos-duration="3000"
            >
                <figure>
                <img
                    style={{ borderRadius: '0 150px 150px 150px' }}
                    className="w-[250px] md:w-[350px] lg:w-[450px] md:order-1 lg:order-1 md:mb-8 "
                    src={image}
                    alt="image"
                />
                </figure>
                <div className="card-body">
                <h1 className="uppercase text-lg md:text-xl lg:text-xl font-bold">{name}</h1>
                    <p>{recipe}</p>
                    <p
                        style={{ color: '#FF0066' }}
                        className="mt-4 text-base md:text-xl lg:text-xl font-bold"
                    >
                        ${price}
                    </p>
                </div>
            </div>



        </div>





    );
};

export default MenuItems;