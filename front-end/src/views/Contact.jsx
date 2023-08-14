import React from 'react'
import ContactForm from '../Components/ContactForm'
import '../css-files/Contact.css'

export default function Contact() {
  return (
    <div className=''>
      <div className='text-5xl p-4'>
        <p className='mt-24'>Contact Us</p>
      </div>
      <ContactForm />
    </div>
  )
}
