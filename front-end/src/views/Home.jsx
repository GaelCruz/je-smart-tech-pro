import React from 'react';
import video from '../assets/jes-vid.mp4';
import { Link } from 'react-router-dom';
import clouds from '../assets/clouds.png'
import '../css-files/Homepage.css'

export default function Home() {
  return (
    <div>
      <div className="relative">
        <video className="w-full" src={video} autoPlay loop />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="2xl:text-9xl lg:text-7xl sm:text-3xl font-bold mb-1">JE Smart Tech</h1>
          <p className="lg:text-4xl sm:text-2xl mb-9">Give your home the upgrade it needs.</p>
          <Link className="bg-slate-500/50 p-2 hover:bg-sky-500/50 text-2xl xl:text-xl rounded-md" to={'/'}>Contact us</Link>
        </div>
      </div>

      <div className='bg-stone-300 px-9 py-20 my-3'>
        <h1 className='text-5xl'>Why Should I Go Smart?</h1>
      </div>

      <div className="py-20 bg-clouds">
        <div className="flex md:flex-row flex-col justify-evenly space-y-4  sm:space-x-4 bg-sky-300/50 p-10 mx-20">
          <img className=" drop-shadow-lg xl:w-full sm:w-1/2 md:w-1/3 lg:w-1/4" src={clouds} alt="" />
          <img className=" drop-shadow-lg xl:w-full sm:w-1/2 md:w-1/3 lg:w-1/4" src={clouds} alt="" />
          <img className=" drop-shadow-lg xl:w-full sm:w-1/2 md:w-1/3 lg:w-1/4" src={clouds} alt="" />
        </div>
      </div>
    </div>
  );
}
