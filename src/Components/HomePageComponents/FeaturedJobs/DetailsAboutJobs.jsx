import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleHeader from "../../Header/TitleHeader";

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

//   console.log(singlejob);

  return (<>
        <TitleHeader>Job Details</TitleHeader>
    <div className="grid grid-cols-1 md:grid-cols-4 p-2 md:p-6 ">
      {/* {
            singlejob && 
            <>
            <h1>{singlejob.job_title}</h1>
            </>
           } */}
      <div className="col-span-3">
        <h2>
          <span className="font-bold text-lg">Job Description:</span> A UI/UX (User Interface/User Experience)
          designer is responsible for designing and creating engaging and
          effective interfaces for software and web applications. This includes
          designing the layout, visual design, and interactivity of the user
          interface.{" "}
        </h2>
        <br />

        <h2>
          <span className="font-bold text-lg">Job Responsibility:</span> Collaborating with cross-functional
          teams: UI/UX designers often work closely with other teams, including
          product management, engineering, and marketing, to ensure that the
          user interface is aligned with business and technical requirements.
          You will need to be able to effectively communicate your design ideas
          and gather feedback from other team members.
        </h2>
        <br />
        <h2>
          <span className="font-bold text-lg">Educational Requirements:</span> <br />
          Bachelor degree to complete any reputational university.
        </h2>
        <br />
        <h2>
          <span className="font-bold text-lg">Experiences::</span> <br />
          2-3 Years in this field.
        </h2>
      </div>

{/* right side  */}
      <div>
           <div className="bg-indigo-100 p-3 my-2 rounded-lg leading-9 ">
           <h2 className="font-bold
           ">Job Details</h2>
           <hr  className=" border border-slate-700" />
           <div> <h2> <span className="font-semibold">Salary :</span> 100K - 150K </h2> </div>
           <div> <h2><span className="font-semibold">Job Title : </span> Product Designer</h2> </div>

           <h2>Contact Information</h2>
           <hr className=" border border-slate-700" />
           <div> <h2> <span className="font-semibold">Phone :</span> 01750-00 00 00</h2> </div>
           <div> <h2> <span className="font-semibold">Email :</span> info@gmail.com</h2> </div>
           <div> <h2> <span className="font-semibold">Address :</span> Dhanmondi 32, Sukrabad
Dhaka, Bangladesh</h2> </div>
           </div>
           <div>
            <button className="btn-bg-color btn border-0">Apply Now</button>
           </div>


      </div>
    </div>
    </>
  );
};

export default DetailsAboutJobs;
