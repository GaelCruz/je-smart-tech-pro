import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const windowWitdth = window.innerWidth

  const checkScreenWidth = () => {
    if(windowWitdth >= 640){
      return true
    } else {
      return false;
    }
  }

  const handleResize = () => {
    checkScreenWidth();
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="z-40 fixed bg-sky-300/90 p-5 sm:p-8 shadow-xl w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl">JE Smart Tech</h1>
        <div className="space-x-8 flex text-md space-x-3 hidden sm:block text-teal-700 self-center">
          <Link className="hover:text-teal-950" to="/">Home</Link>
          <Link className="hover:text-teal-950" to="/about">About</Link>
          <Link className="hover:text-teal-950" to="/our-services">Our Services</Link>
          <Link className="hover:text-teal-950" to="/contact">Contact</Link>
        </div>

        <div onClick={toggleNav} id='burger-btn' className='sm:hidden space-y-1'>
          <div className={`w-7 h-1 bg-black ${isNavOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-4 h-1 bg-black ${isNavOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-7 h-1 bg-black ${isNavOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>
      <div
        id='nav-items'
        className={`md:hidden sm:flex flex-col ${isNavOpen ? 'flex' : 'hidden'} ${handleResize ? '': 'hidden'}`}
      >
        <Link className="hover:text-teal-950" to="/">Home</Link>
        <Link className="hover:text-teal-950" to="/about">About</Link>
        <Link className="hover:text-teal-950" to="/our-services">Our Services</Link>
        <Link className="hover:text-teal-950" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
