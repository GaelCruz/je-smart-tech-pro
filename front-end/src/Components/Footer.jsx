import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faClock, } from '@fortawesome/free-solid-svg-icons'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs'


export default function Footer() {
  return (
    <div className=' bg-stone-200 '>
      <div className='flex justify-evenly p-8'>
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Logo"/>
          </Link>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold'>Quick Links</h1>
          <Link className='text-teal-700 hover:text-teal-950' to={"/"}>Home</Link>
          <Link className='text-teal-700 hover:text-teal-950' to={"/our-services"}>Our Services</Link>
          <Link className='text-teal-700 hover:text-teal-950' to={"/about"}>About</Link>
          <Link className='text-teal-700 hover:text-teal-950' to={"/contact"}>Contact</Link>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold'>Contact</h1>
          <div className='space-x-2'>
            <FontAwesomeIcon icon={faPhone} />
            <Link className='text-teal-700 hover:text-teal-950' to={"/"}>832.845.9176</Link>
          </div>
          
          <div className="space-x-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <Link className='text-teal-700 hover:text-teal-950' to={"/our-services"}>javier@jesmart-tech.com</Link>
          </div>
          
          <div className="space-x-2">
          <FontAwesomeIcon icon={faClock} />
            <Link className='text-teal-700 hover:text-teal-950' to={"/about"}>7:00am - 5:00pm</Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <Link className='text-2xl text-teal-700 hover:text-teal-950' to={"/contact"}><AiFillInstagram /></Link>
            <Link className='text-xl text-teal-700 hover:text-teal-950' to={"/contact"}><BsFacebook /></Link>
            <Link className='text-2xl text-teal-700 hover:text-teal-950' to={"https://www.instagram.com"}><AiFillLinkedin /></Link>
          </div>
        </div>
      </div>  
      <div className='text-center py-2'>
        <p>All Rights Reserved || JE Smart Tech &copy;2023</p>
      </div>
    </div>
  )
}
