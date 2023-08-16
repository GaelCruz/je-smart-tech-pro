import React from 'react'
import ContactForm from '../Components/ContactForm'
import '../css-files/Contact.css'

export default function Contact() {
  return (
    <div className=''>
      <div className='contact-us-page'>
        <div className="title">
          <div className="title-box"></div>
          <p>Contact Us</p>
        </div>

        <div className="contact-box-and-form">

          <div className="container">
            <div className="contact">
              <h1>CONTACT</h1>

              <div className="contact-info">
                <div className="email">
                  <div className="email-icon">{/* img goes here */}</div>
                  <p>javier@jesmart-tech.com</p>
                </div>

                <div className="phone">
                  <div className="phone-icon">{/* img goes here */}</div>
                  <p>832.845.9176</p>
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
