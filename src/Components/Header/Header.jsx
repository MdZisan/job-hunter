import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='banner-bg '>
           <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><ActiveLink to={"/"}>Home</ActiveLink> </li>
        <li><ActiveLink to={"/statistics"}>Statistics</ActiveLink> </li>
        <li><ActiveLink to={"/appliedJobs"}>Applied Jobs</ActiveLink> </li>
        <li><ActiveLink to={"/Blog"}>Blog</ActiveLink> </li>
       
       
      </ul>
    </div>
    <h2 className="btn btn-ghost normal-case text-xl"><Link to={"/"}>Job Hunter</Link></h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><ActiveLink to={"/"}>Home</ActiveLink> </li>
        <li><ActiveLink to={"/statistics"}>Statistics</ActiveLink> </li>
        <li><ActiveLink to={"/appliedJobs"}>Applied Jobs</ActiveLink> </li>
        <li><ActiveLink to={"/Blog"}>Blog</ActiveLink> </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-bg-color border-0" href='#applyjobs'>Star Applying</a>
  </div>
</div> 
{}
        </div>
    );
};

export default Header;