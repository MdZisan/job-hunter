import React , { useEffect, useState }  from 'react';
import SingleJob from './SingleJob';

const JobCategoryList = () => {
    const [categorys,setCategorys]=useState([]);
     useEffect(()=>{
        fetch('/jobCategorylist.json')
        .then(res=>res.json())
        .then(data=>setCategorys(data))
     },[])
    return (
        <div className='text-center mt-7'>
           <div>
            <h2 className='text-5xl font-bold'>Job Category List</h2>
            <p className='text-lg mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div> 
            <div className='grid grid-cols-1 md:grid-cols-4 mt-8 text-start w-[80%] md:w-[95%] mx-auto gap-3'>
             {categorys.map(category=><SingleJob key={category.id}
             category={category}
             ></SingleJob>)}
            </div>
        </div>
    );
};

export default JobCategoryList;