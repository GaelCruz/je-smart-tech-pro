import React from 'react';
import video from '../assets/jes-vid.mp4';
import { Link } from 'react-router-dom';
import highCeiling from '../assets/high-ceiling.png'
import clouds from '../assets/clouds.png';
import modernKitchen from '../assets/modern-kitchen.png'
import fleet from '../assets/fleet.png'
import gps from '../assets/gps.png'
import dashcam from '../assets/dashcam.png'
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
          <Link className="bg-slate-500/50 p-2 hover:bg-sky-500/50 text-sm lg:text-xl rounded-md " to={'/'}>Contact us</Link>
        </div>
      </div>

      <div className='bg-stone-300 px-9 py-5 sm:py-20 sm:px-20 my-3'>
        <h1 className='lg:text-5xl sm:text-3xl text-xl'>Why Should I Go Smart?</h1>
      </div>

      <div className="sm:py-20 bg-clouds max-w-full sm:h-full h-96 overflow-x-auto ">
        <div className="
          space-y-3
          sm:space-y-0
          sm:space-x-3
          xl:space-y-0
          p-5
          overflow-x-auto
          sm:justify-evenly  
          bg-sky-300/50 
          sm:flex">

          <div className="
            relative
            drop-shadow-lg 
            w-full
            h-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                <h1 className="text-3xl text-white font-bold">Your Text Goes Here</h1>
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full 
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={highCeiling}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                <h1 className="text-3xl text-white font-bold">Your Text Goes Here</h1>
                <p>Hello dudes</p>
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={modernKitchen}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                <h1 className="text-3xl text-white font-bold">Your Text Goes Here</h1>
                <p>Hello dudes</p>
              </div>
          </div>
        </div>
      </div>

      <div className='bg-stone-300 px-9 py-5 sm:py-20 sm:px-20 my-3'>
      <h1 className='lg:text-5xl sm:text-3xl text-xl'>Automotive Services</h1>
        <p className='lg:text-3xl sm:text-2xl text-lg text-stone-500'>Residential/Commercial/Fleet Vehicles</p>
      </div>

      <div className="sm:py-20 bg-house max-w-full sm:h-full h-96 overflow-y-auto ">
        <div className="
          space-y-3
          sm:space-y-0
          sm:space-x-3
          xl:space-y-0
          p-5
          sm:justify-evenly  
          bg-sky-300/50 
          sm:flex">

          <div className="
            relative
            drop-shadow-lg 
            w-full
            h-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={dashcam}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                <h1 className="text-3xl text-white font-bold">Your Text Goes Here</h1>
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full 
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={gps}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                <h1 className="text-3xl text-white font-bold">Your Text Goes Here</h1>
                <p>Hello dudes</p>
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={fleet}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                <h1 className="text-3xl text-white font-bold">Your Text Goes Here</h1>
                <p>Hello dudes</p>
              </div>
          </div>
        </div>
      </div>

      <div className='bg-stone-300 px-9 py-5 sm:py-20 sm:px-20 my-3'>
        <h1 className='lg:text-5xl sm:text-3xl text-xl'>Home Automation</h1>
        <p className='lg:text-3xl sm:text-2xl text-lg text-stone-500'>Residential and Commercial</p>
      </div>

      <div className='bg-stone-300 px-9 py-5 sm:py-20 sm:px-20 my-3'>
        <h1 className='lg:text-5xl sm:text-3xl text-xl'>See Our Work</h1>
      </div>

      <div className="sm:py-20 bg-clouds max-w-full sm:h-full h-96 overflow-x-auto">
        <div className="
          space-y-3
          sm:space-y-0
          sm:space-x-3
          xl:space-y-0
          p-5
          
          bg-sky-300/50 
          sm:flex">

          <div className="
            relative
            drop-shadow-lg 
            w-full
            h-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full
            h-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full
            h-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full
            h-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full
            h-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full
            h-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full
            h-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full 
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                
              </div>
          </div>

          <div className="
            relative
            drop-shadow-lg 
            w-full
            sm:w-1/2 
            md:w-1/3 
            lg:w-1/4">
              <img
                src={clouds}
                alt="Your Image"
                className=""
              />
              <div className="absolute top-0 left-0 p-4">
                
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}
