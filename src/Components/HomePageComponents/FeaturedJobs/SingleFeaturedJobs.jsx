import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleFeaturedJobs = ({job}) => {
   const {logo_img,job_title,company_name,job_site,job_type
    ,location,salary,serial} =job;

    return (
        <div className='flex flex-col justify-start my-4 border p-4 rounded-lg'>
           <div className='w-[120px] h-[50px] mx-auto md:mx-0'>
           <img src={logo_img} alt="Company logo" />
           </div>
             <h2 className='font-extrabold text-xl'>{job_title}</h2>   
             <h2 className='font-semibold text-lg'>{company_name}</h2> 
             <div className='flex gap-2 justify-center md:justify-start mt-3'>
                <p className='rounded-lg border border-indigo-400 text-indigo-500 p-3'>{job_site}</p>
                <p className='rounded-lg border border-indigo-400 text-indigo-500 p-3'>{job_type}</p>
             </div>
             <div className='md:flex md:mx-0 mx-auto gap-4 justify-center md:justify-start mt-3 '>
                <div className='flex gap-2'>
                    <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> </p>
                    <p>{location}</p>
                </div>
                <div className='flex gap-2'>
                    <p> <FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon> </p>
                    <p>Salary: ${salary}</p>
                </div>
             </div>
           <div className='mt-3'>
         <Link to={`job/${serial}`}>  <button className='btn-bg-color btn-style'>View Details</button></Link>
           </div>
        </div>
    );
};

export default SingleFeaturedJobs;