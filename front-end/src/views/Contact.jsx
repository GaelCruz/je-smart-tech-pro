import React from 'react'
import ContactForm from '../Components/ContactForm'
import '../css-files/Contact.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import background from '../assets/contact-page/background-house.png'

export default function Contact() {
  return (
    <div className=''>
      <div className='contact-us-page'>
        <div className="title">
          <div className="title-box"></div>
          <p>Contact Us</p>
        </div>

        <div className="p-3 contact-box-and-form sm:flex">

          <div className="container">
            <div className=" bg-zinc-400/80 shadow-2xl rounded contact">
              <h1>CONTACT</h1>

              <div className="contact-info space-y-2">
                <div className="email flex items-center">
                  <div><MdEmail /></div>
                  <p><a href="mailto:javier@jesmart-tech.com">javier@jesmart-tech.com</a></p>
                </div>

                <div className="phone flex items-center">
                  <div className=""><BsFillTelephoneFill /></div>
                  <p><a href="tel:8328459176">832.845.9176</a></p>
                </div>

                <div className="bg-contact-form"></div>
              </div>
            </div>
            
          </div>

          <div className="bg-contact-form">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  )
}
