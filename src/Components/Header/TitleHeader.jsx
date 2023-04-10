import React from 'react';

const TitleHeader = ({children}) => {
    return (
        <div className=' h-[200px] banner-bg flex justify-center items-center'>
            <h1 className='font-bold text-3xl'>{children}</h1>
        </div>
    );
};

export default TitleHeader;