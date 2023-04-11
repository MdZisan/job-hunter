import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleHeader from "../../Header/TitleHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faDollarSign,
  faEnvelope,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";
import { Toaster, toast } from "react-hot-toast";

const DetailsAboutJobs = () => {
  const { jobId } = useParams();

  const id = parseInt(jobId);
  //  const dynamicId = id.jobId;
  //  console.log(id);
  const [jobs, setJobs] = useState();
  const [singlejob, setSingleJob] = useState();

  useEffect(() => {
    fetch("/featuredJobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        const details = data.find((job) => job.serial === id);
        setSingleJob(details);
      });
  }, [id]);

  const handleAddJob = (id) => {
  const item=   getShoppingCart();
    
    if (item[id]> 0) {
      const myButton = document.getElementById('applyNow');
myButton.disabled = true;
myButton.innerText = ' Already Applied'
toast.error('Already Applied');

    
    }
    else{
      addToDb(id)
      toast.success('Applied');
    }
  };

  return (
    <>
    <Toaster />
      <TitleHeader>Job Details</TitleHeader>
      <div className="grid grid-cols-1 md:grid-cols-4 p-2 md:p-6 md:gap-3">
        {singlejob && (
          <>
            <div className="col-span-3">
              <h2>
                <span className="font-bold text-lg">Job Description:</span>
                {singlejob.job_description}
              </h2>
              <br />

              <h2>
                <span className="font-bold text-lg">Job Responsibility:</span>
                {singlejob.job_responsibility}
              </h2>
              <br />
              <h2>
                <span className="font-bold text-lg">
                  Educational Requirements:
                </span>
                <br />
                {singlejob.education_requirements}
              </h2>
              <br />
              <h2>
                <span className="font-bold text-lg">Experiences::</span> <br />
                {singlejob.experiences}
              </h2>
            </div>

            {/* right side  */}
            <div>
              <div className="bg-indigo-100 p-3 my-2 rounded-lg leading-9 ">
                <h2
                  className="font-bold
           "
                >
                  Job Details
                </h2>
                <hr className=" border border-slate-700" />
                <div>
                  
                  <h2>
                    
                    <span className="text-indigo-400  pr-2">
                      <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
                    </span>
                    <span className="font-semibold">Salary :</span>
                    {singlejob.salary} (Per month)
                  </h2>
                </div>
                <div>
                  
                  <h2>
                    
                    <span className="text-indigo-400  pr-2 ">
                      
                      <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                    </span>
                    <span className="font-semibold">Job Title : </span>
                    {singlejob.job_title}
                  </h2>
                </div>

                <h2 className="font-semibold">Contact Information</h2>
                <hr className=" border border-slate-700" />
                <div>
                  
                  <h2>
                    
                    <span className="text-indigo-400  pr-2 ">
                      
                      <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                    </span>
                    <span className="font-semibold">Phone :</span>
                    {singlejob.phone}
                  </h2>
                </div>
                <div>
                  
                  <h2>
                    
                    <span className="text-indigo-400  pr-2 ">
                      
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                    <span className="font-semibold">Email :</span>
                    {singlejob.company_name}
                    {singlejob.email}
                  </h2>
                </div>
                <div>
                  
                  <h2>
                    
                    <span className="text-indigo-400  pr-2 ">
                      
                      <FontAwesomeIcon
                        icon={faLocationDot}
                      ></FontAwesomeIcon>
                    </span>
                    <span className="font-semibold">Address :</span>
                    {singlejob.location}
                  </h2>
                </div>
              </div>
              <div>
                <button
                  className="btn-bg-color btn border-0 "
                  id="applyNow"
                  onClick={() => handleAddJob(singlejob._id)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailsAboutJobs;
