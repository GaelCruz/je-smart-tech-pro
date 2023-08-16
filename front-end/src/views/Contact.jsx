import React from 'react'
import ContactForm from '../Components/ContactForm'
import '../css-files/Contact.css'

export default function Contact() {
  return (
    <div className=''>
      {/* <div className='contact-us-page'>
        <div className="title">
          <div className="title-box"></div>
          <p className='mt-24'>Contact Us</p>
        </div>

        <div className="container">
          <div className="contact">
            <h1>CONTACT</h1>

            <div className="contact-info">
              <div className="email">
                <div className="email-icon">img goes here</div>
                <p>javier@jesmart-tech.com</p>
              </div>

              <div className="phone">
                <div className="phone-icon">img goes here</div>
                <p>832.845.9176</p>
              </div>

            </div>
          </div>
          <ContactForm />
        </div>
      </div> */}

      <div className='pt-24'>
        <p className='bg-gray-300 py-24 pt-28 text-3xl text-center'>Contact Us.</p>
      </div>
      <div>
        <div className='flex justify-evenly items-center space-x-4 p-4'>

          <div className='w-1/3 flex justify-center bg-gray-200'>
            <div className='flex flex-col contact-box justify-center'>
              <div className='flex flex-col justify-right space-y-3'>
                <p className='text-7xl'>CONTACT</p>
                <p className='pl-2 text-4xl'>555-555-5555</p>
                <p className='pl-2 text-3xl'>email@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className=''>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
