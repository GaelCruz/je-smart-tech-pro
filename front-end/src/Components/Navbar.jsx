import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import jestLogo from '../assets/logo.png';
import '../css-files/navbar.css'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dropDownRef = useRef(null)
  const [ourServicesButtonClick, setOurServicesButtonClick] = useState(false)
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

  const handleClick = () => {
    setOurServicesButtonClick(!ourServicesButtonClick);
  }

  const closeMenu = (e) => {
    if(dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setOurServicesButtonClick(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <nav className="z-40 fixed bg-sky-300/90 p-5 sm:p-8 shadow-xl w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* <h1 className="text-xl sm:text-2xl">JE Smart Tech</h1> */}
        <Link to={"/"}><img className='h-10' src={jestLogo} alt="" /></Link>
        <div className="space-x-8 text-md space-x-3 hidden sm:block text-teal-700 self-center">
          <Link className="hover:text-teal-950" to="/">Home</Link>
          <Link className="hover:text-teal-950" to="/about">About</Link>
          <button ref={dropDownRef} onClick={handleClick} className='relative hover:text-red-500'>Our Services <button className='animate-bounce'>▼</button></button>
          <Link className="hover:text-teal-950" to="/contact">Contact</Link>

          <div className=' relative'>
            <div  className={`services-container right-1 p-5 absolute mt-2 bg-gray-200 rounded-lg ${ourServicesButtonClick ? 'fade-in' : ''}`}>
              <ul>  

                <li className='py-2 p-1 border-b-2 border-sky-300/50 hover:bg-sky-300/50 hover:rounded-lg hover:shadow-xl'><Link className="hover:text-teal-950" to="/comfort-and-control">Comfort & Control</Link></li>

                <li className='py-2 p-1 border-b-2 border-sky-300/50 hover:bg-sky-300/50 hover:rounded-lg hover:shadow-xl'><Link className="hover:text-teal-950" to="/cameras-and-security">Cameras & Security</Link></li>

                <li className='py-2 p-1 border-b-2 border-sky-300/50 hover:bg-sky-300/50 hover:rounded-lg hover:shadow-xl'><Link className="hover:text-teal-950" to="/automotive-services">Automotive Services</Link></li>

              </ul>
            </div>
          </div>
          
        </div>

        <div onClick={toggleNav} id='burger-btn' className='sm:hidden space-y-1'>
          <div className={`w-7 h-1 bg-black ${isNavOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-4 h-1 bg-black ${isNavOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-7 h-1 bg-black ${isNavOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>
      <div
        id='nav-items'
        className={`mt-5 md:hidden sm:flex flex-col ${isNavOpen ? 'flex' : 'hidden'} ${handleResize ? '': 'block'}`}
      >
        <Link className="hover:text-teal-950" to="/">Home</Link>
        <Link className="hover:text-teal-950" to="/about">About</Link>
        <Link className="hover:text-teal-950" to="/comfort-and-control">Comfort & Control</Link>
        <Link className="hover:text-teal-950" to="/cameras-and-security">Cameras & Security</Link>
        <Link className="hover:text-teal-950" to="/automotive-services">Automotive Services</Link>
        <Link className="hover:text-teal-950" to="/contact">Contact</Link>
      </div>
      
    </nav>
  );
}
