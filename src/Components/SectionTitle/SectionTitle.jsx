import React from 'react';

const SectionTitle = ({ subHeading , heading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center py-8'>
            <p className='text-yellow-500 mb-2'>{ subHeading}</p>
            <h3 className='border-y-4 text-3xl py-4 font-bold text-black uppercase'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;