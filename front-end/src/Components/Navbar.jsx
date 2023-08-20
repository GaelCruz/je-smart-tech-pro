import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import jestLogo from '../assets/homepage/logo.png';
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dropDownRef = useRef(null)
  const [ourServicesButtonClick, setOurServicesButtonClick] = useState(false)

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
    <nav className="bg-sky-300/90 p-2 px-3 relative sm:p-5 shadow-xl w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* <h1 className="text-xl sm:text-2xl">JE Smart Tech</h1> */}
        <Link to={"/"}><img className='h-10' src={jestLogo} alt="" /></Link>
        <div className="space-x-8 text-md space-x-3 hidden sm:block text-teal-700 self-center">
          <Link className="hover:text-teal-950" to="/">Home</Link>
          <Link className="hover:text-teal-950" to="/about">About</Link>
          <button ref={dropDownRef} onClick={handleClick} className='relative hover:text-red-500'>Our Services <button className='animate-bounce'>▼</button></button>
          <Link className="hover:text-teal-950" to="/contact">Contact</Link>

          <div className='relative'>
            <div  className={`services-container z-30 -top-64 right-1 p-5 absolute mt-7 bg-gray-200 rounded-lg duration-300 ${ourServicesButtonClick ? 'translate top-1 duration-300 right-1 ' : ''}`}>
              <ul>  

                <li className='py-2 p-1 border-b-2 border-sky-300/50 hover:bg-sky-300/50 hover:rounded-lg hover:shadow-xl'><Link className="hover:text-teal-950" to="/comfort-and-control">Comfort & Control</Link></li>

                <li className='py-2 p-1 border-b-2 border-sky-300/50 hover:bg-sky-300/50 hover:rounded-lg hover:shadow-xl'><Link className="hover:text-teal-950" to="/cameras-and-security">Cameras & Security</Link></li>

                <li className='py-2 p-1 border-b-2 border-sky-300/50 hover:bg-sky-300/50 hover:rounded-lg hover:shadow-xl'><Link className="hover:text-teal-950" to="/automotive-services">Automotive Services</Link></li>

              </ul>
            </div>
          </div>
          
        </div>

        <div onClick={toggleNav} id='burger-btn' className='sm:hidden space-y-1'>
          <div className={`w-7 h-1 bg-black duration-300 ${isNavOpen ? 'translate rotate-45 translate-y-2 duration-300' : ''}`}></div>
          <div className={`w-4 h-1 bg-black duration-300 ${isNavOpen ? 'opacity-0 duration-300' : ''}`}></div>
          <div className={`w-7 h-1 bg-black duration-300 ${isNavOpen ? 'translate -rotate-45 -translate-y-2 duration-300' : ''}`}></div>
        </div>
      </div>
      
      <div
        id='nav-items'
        className={`absolute -right-60 p-3 text-xl rounded-xl bg-sky-300/90 mt-5 flex flex-col ${isNavOpen ? '-translate-x-64 duration-300' : 'duration-300'}`}
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
