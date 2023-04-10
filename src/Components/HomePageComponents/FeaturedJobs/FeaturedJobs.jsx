import React, { useEffect, useState } from 'react';
import SingleFeaturedJobs from './SingleFeaturedJobs';

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [limit, setLimit] = useState(4);
    
    useEffect(()=>{
        fetch('/featuredJobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    const handleLoadMore = () => {
        setLimit(limit + 2); 
      }
    return (
        <div className=' my-4 text-center md:text-start p-3 leading-8'>
              <div className='text-center'>
            <h2 className='text-5xl font-bold'>Featured Jobs</h2>
            <p className='text-lg mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div> 
            <div className=' grid grid-cols-1 md:grid-cols-2 md:gap-4 md:p-6 '>
            {jobs.slice(0, limit).map(job => <SingleFeaturedJobs key={job._id} job={job}></SingleFeaturedJobs>)}
            </div>
       
           <div className='text-center'>
           {limit < jobs.length && <button className='btn-bg-color btn-style' onClick={handleLoadMore} >See All Jobs</button>}
           </div>
        </div>
    );
};

export default FeaturedJobs;