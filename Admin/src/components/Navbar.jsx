import React from 'react';
import logo from "../assets/logo.svg";
import profileImg from "../assets/profile.png";

const Navbar = () => {
  return (
    <div className='bg-white py-5 ring-slate-900/5'>
      <nav className='max_padd_container flex items-center justify-between relative'>
        <div className='flex-none'>
          <img src={logo} alt="Logo" />
        </div>
        
          <div className='uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:px-1'>
            Admin Panel
          </div>
       
        <div className='flex-none'>
          <img src={profileImg} alt="Profile" className='h-12 w-12 rounded-full' />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
