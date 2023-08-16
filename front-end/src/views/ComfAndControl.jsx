import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'
import ContactForm from '../Components/ContactForm';
import '../css-files/comfAndCont.css'

export default function ComfAndControl() {

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop > windowHeight) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [items, setItems] = useState([
    { "id": 4, 
      "title": "Smart Home System", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

      { "id": 5, 
      "title": "Whole Home Audio/Video System", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

      { "id": 6, 
      "title": "Smart Shades and Drapes", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

      { "id": 7, 
      "title": "Smart Thermostats", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

      { "id": 8, 
      "title": "Access Control", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

      { "id": 9, 
      "title": "Pool Control", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

      { "id": 10, 
      "title": "Smart Lighting", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

      { "id": 11, 
      "title": "Networking and Wifi", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },
      
  ]);

  return (
    <div>
      <div className="comf-and-cont-banner">
        <h1 className='pt-80 pb-60 font-bold text-white text-center p-20 text-4xl'>Comfort and Control</h1>
      </div>
      <div className='p-3 bg-gray-100'>
        {items.map((item, index) => (
          <div key={index} className={`bg-${item.id} mb-3 p-10 xl:py-20 py-20 flex ${item.id % 2 === 0 ? 'flex-row-reverse': ''} fade-in-whole-element ${isVisible ? 'visible' : ''}`}>
            <div ref={elementRef} className={`bg-sky-300/50 max-w-lg p-3 shadow-2xl fade-in-element ${isVisible ? 'visible' : ''}`}>
              <h2 className='text-lg font-bold mb-2'>{item.title}</h2>
              <p className='mb-3'>{item.desc.slice(0,300)}...</p>
              <Link className='text-teal-300' to={`/service/item/${item.id}`}>Read More...</Link>
            </div>  
          </div>
        ))}
        <ContactForm />
      </div>
    </div>
  )
}
