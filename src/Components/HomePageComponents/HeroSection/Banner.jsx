import React from 'react';
import banner from '../../../assets/Banner-bg.png'

const Banner = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 items-center w-11/12 mx-auto z-10'>
            {/* left side  */}
            <div className='w-[80%]'>
                <h2 className='text-7xl font-semibold md:leading-[90px] '>One Step Closer To Your <span className='main-text-bg font-bold'>Dream Job</span></h2>
                <br />
                <p className='text-lg font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <br />
                <button className='btn-bg-color btn-style'>Get Started</button>
            </div>
            {/* right side */}
            <div className='m-3 md:m-0  '>
        <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;