import React, { useEffect, useState } from "react";
import TitleHeader from "../Header/TitleHeader";
import { getShoppingCart } from "../../utilities/fakedb";
import SingleAppliedJobs from "./SingleAppliedJobs";

const AppliedJobs = () => {
   const [jobs,setJobs]= useState([]);
   const [job,setJob]=useState([])
//    const [filteredJob, setFilteredJob] = useState([]);

   useEffect(()=>{
       const appliedJobs = getShoppingCart();
       const jobsId = [];
    for(const appliedJob in appliedJobs){
       jobsId.push(appliedJob)
       
    }
        setJobs(jobsId)
   },[]);

   useEffect(()=>{
    fetch('/featuredJobs.json')
    .then(res=>res.json())
    .then(data=>{
        const foundJobs = [];
      jobs.forEach(id => {
        const allJob = data.find(job => job._id === id);
        foundJobs.push(allJob);
      });
      setJob(foundJobs);
      })
   },[jobs])
//  console.log(job);



  const [filter, setFilter] = useState('all');
  
   const handleFilterChange=(event) =>{
        setFilter(event.target.value);
        // setFilteredJob(filteredJobs);
      }

      let filteredJobs = job;
      if (filter !== 'all') {
        filteredJobs = job.filter(job => job.job_site === filter);
    }
//   console.log(filteredJobs);
  return (
    <div>
      <TitleHeader>Applied Jobs</TitleHeader>
      <div>
       
            
            <div className=" my-4 border-indigo-300 border rounded-lg w-[100px] h-[40px] me-3 ms-auto">
            <div className="text-xl font-semibold text-center outline-none">
              {filter && (
                <div>
                  <select value={filter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="Remote">Remote</option>
                    <option value="OnSite">Onsite</option>
                  </select>
                </div>
              )}
            </div>
          </div>
       

<div>
    {
        filteredJobs.length===0 && <h2 className="font-bold text-center text-5xl">No Applied jobs</h2>
    }                

    {
      filteredJobs.map(singlejob=><SingleAppliedJobs singlejob={singlejob} key={singlejob._id}></SingleAppliedJobs>)  
    }
</div>
        {/* <ul>
          {filteredJobs.map((job) => (
            <li key={job._id}>{job.company_name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default AppliedJobs;
