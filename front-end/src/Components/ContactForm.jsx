import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_csljiyl', 'template_tg0xv9l', form.current, 'eRC0p8p1KhvEOhMbR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("we got your email")
  };

  return (
    <div className="w-full">
       <form ref={form} onSubmit={sendEmail} action="submit" className='space-y-4 p-5 my-7 rounded max-w-2xl mx-auto bg-sky-300/50 shadow-xl shadow-sky-400/50' required>

        <input type="text" name='from_name' placeholder='First and Last Name' className='p-2 w-full bg-sky-300/50 shadow-md ring-none focus:outline-none' required/>

        <input type="text" name='from_email' className='p-2 w-full bg-sky-300/50 shadow-md ring-none focus:outline-none' placeholder='Email' required/>

        <input type="tel" pattern='[0-9]{10}' required name="from_phone_number" className='p-2 w-full bg-sky-300/50 shadow-md ring-none focus:outline-none' placeholder='Phone Number'/>
 
        <textarea
          className="fload-left h-48 w-full p-3 leading-tight bg-sky-300/50 shadow-md ring-none focus:outline-none"
          type="text"
          name="message"
          placeholder="What can we do for you?"
          requ
        />

        <div className='w-full mx-auto'>
          <button className='bg-gray-200 hover:bg-sky-300 rounded bg-sky-300/50 shadow-md ring-none focus:outline-none p-2 w-full'>Submit</button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
