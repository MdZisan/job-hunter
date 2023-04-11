import React  from 'react';

const SingleJob = ({category}) => {
  const { categoryName, img, jobsAvailable} = category;
  
    return (
        <div className='p-[40px] banner-bg rounded-lg'>
           <div className='bg-indigo-100 w-[60px] p-2 rounded-lg'>
           <img src={img} alt="" className='' />
           </div>
            <div className='mt-3'>
            <h2 className='font-semibold'>{categoryName}</h2>
            <p className='text-xs text-slate-400'>{jobsAvailable}</p>
            </div>
        </div>
    );
};

export default SingleJob;