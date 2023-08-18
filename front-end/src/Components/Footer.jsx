import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/homepage/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faClock, } from '@fortawesome/free-solid-svg-icons'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs'


export default function Footer() {
  return (
    <div className=''>
      <div className='hidden sm:block bg-stone-200 '>
        <div className='flex p-8 justify-evenly'>
          <div>
            <Link to={"/"}>
              <img src={logo} alt="Logo"/>
            </Link>
            <div className="flex justify-center">
              <div className='flex items-center space-x-2 pt-1'>
                <Link className='text-2xl text-teal-700 hover:text-teal-950' to={"/contact"}><AiFillInstagram /></Link>
                <Link className='text-xl text-teal-700 hover:text-teal-950' to={"/contact"}><BsFacebook /></Link>
                <Link className='text-2xl text-teal-700 hover:text-teal-950' to={"https://www.instagram.com"}><AiFillLinkedin /></Link>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold'>Quick Links</h1>
            <Link className='text-teal-700 hover:text-teal-950' to={"/"}>Home</Link>
            <Link className='text-teal-700 hover:text-teal-950' to={"/about"}>About</Link>
            <Link className='text-teal-700 hover:text-teal-950' to={"/contact"}>Contact</Link>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold'>Contact</h1>
            <div className='space-x-2 flex items-center'>
              <FontAwesomeIcon icon={faPhone} />
              <p className='text-teal-700 hover:text-teal-950'><a href="tel:8328459176">832.845.9176</a></p>
            </div>
            
            <div className="space-x-2 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className='text-teal-700 hover:text-teal-950'><a href="mailto:javier@jesmart-tech.com">javier@jesmart-tech.com</a></p>
            </div>
            
            <div className="space-x-2 flex items-center">
            <FontAwesomeIcon icon={faClock} />
              <p className='text-teal-700 hover:text-teal-950'>7:00am - 5:00pm</p>
            </div>
          </div>
        </div>  
        <div className='text-center py-2'>
          <p>All Rights Reserved || JE Smart Tech &copy;2023</p>
        </div>
      </div>

      {/* Mobile footer */}
      <div className='sm:hidden bg-stone-200'>
        <div className='flex items-center justify-evenly'>
          <Link to={"/"}>
            <img className='max-h-10' src={logo} alt="Logo"/>
          </Link>
          <div className="flex justify-center py-5">
            <div className='flex items-center space-x-2 pt-1'>
              <Link className='text-2xl text-teal-700 hover:text-teal-950' to={"/contact"}><AiFillInstagram /></Link>
              <Link className='text-xl text-teal-700 hover:text-teal-950' to={"/contact"}><BsFacebook /></Link>
              <Link className='text-2xl text-teal-700 hover:text-teal-950' to={"https://www.instagram.com"}><AiFillLinkedin /></Link>
            </div>
          </div>
        </div>
        

        <div className='text-center py-2'>
          <p className='text-sm'>All Rights Reserved || JE Smart Tech &copy;2023</p>
        </div>
      </div>
    </div>
  )
}
