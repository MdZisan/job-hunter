import { faCircleDollarToSlot, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleAppliedJobs = ({ singlejob }) => {
  const {
    logo_img,
    job_title,
    company_name,
    job_site,
    job_type,
    location,
    salary,serial
  } = singlejob;
  return (
    <div className="p-7 ">
      <div className="md:flex  border rounded-lg shadow-lg p-4">
        {/* logo */}
        <div className="rounded-xl bg-slate-100 w-[240px] h-[240px] flex justify-center items-center"  >
          <img src={logo_img} alt=""  className="p-4 w-[200px] h-[90px]"/>
        </div>
        {/* details AND BUTTON*/}
        <div className="md:flex justify-between items-center w-full p-4">
          {/* details  */}
          <div>
          <h2 className='font-extrabold text-xl'>{job_title}</h2>   
             <h2 className='font-semibold text-lg'>{company_name}</h2> 
            <div className='md:flex gap-2 justify-center md:justify-start mt-3'>
                <p className='rounded-lg border border-indigo-400 text-indigo-500 p-3 my-2 md:my-0'>{job_site}</p>
                <p className='rounded-lg border border-indigo-400 text-indigo-500 p-3'>{job_type}</p>
             </div>
             <div className='flex gap-4 justify-center md:justify-start mt-3'>
                <div className='flex gap-2'>
                    <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> </p>
                    <p>{location}</p>
                </div>
                <div className='flex gap-2'>
                    <p> <FontAwesomeIcon icon={faCircleDollarToSlot}></FontAwesomeIcon> </p>
                    <p>{salary}</p>
                </div>
             </div>
          </div>
          {/* buttoon  */}
          <div>
          <Link to={`/job/${serial}`}>  <button className='btn-bg-color btn-style'>View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAppliedJobs;
