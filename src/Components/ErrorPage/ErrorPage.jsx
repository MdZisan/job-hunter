import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <div className=' container flex justify-center items-center h-screen mx-auto ' >
            <div className=''>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1681239782~exp=1681240382~hmac=99ef872d5cb4e936682da18f8d6cb7805abe887a372f4991b1cc7d412d68bdac" alt="" className=' mx-auto w-1/2 h-1/2' />
            <h2 className='text-center text-3xl font-bold text-red-600'>{error?.message}</h2>
            <div className='text-center my-3'>
               <button className='btn-style btn-bg-color hover:opacity-50 transition-all'> <Link to="/">Home</Link></button>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;