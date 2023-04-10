import React from 'react';
import Banner from './HeroSection/Banner';
import JobCategoryList from './JobCategoryList/JobCategoryList';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div className=''>
         <div className='banner-bg '>
         <Banner></Banner>
         </div>
         <div>
          <JobCategoryList></JobCategoryList>
         </div>
          <div>
            <FeaturedJobs></FeaturedJobs>
          </div>
        </div>
    );
};

export default Home;