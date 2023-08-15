import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import ContactForm from '../Components/ContactForm';
import '../css-files/AutomotiveServices.css'

export default function AutomotiveServices() {

  const [items, setItems] = useState([
    { "id": 12,
    "title": "Vehicle Backup Camera Systems", 
    "desc": "Lörem ipsum sov intrassade jag dityrade viv megalig. Polygisk nyheten utom treskade krot. Nyspevis prera, dös trens. Kaplangar presamma trak homorevis kromon fabelt. Gigans stenobel till rerade utom krofar korade fera. Ons nilig parasm. Gypp amor bufedat kontrak atura. Trism janing pode far pseudoling, och spesm. Vivigisk faning bemäsat. Din telelingar. Far fis gumode i beng. Sosade pas än teviktig. Krock eurojande, id tyn. " },

    { "id": 13, 
    "title": "Live Dash Cam & 360 View Aux Cams", 
    "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

    { "id": 14, 
    "title": "Cloud-Based Video Storage", 
    "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

    { "id": 15, 
    "title": "Live GPS Tracking", 
    "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

    { "id": 16, 
    "title": "ELD", 
    "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

    { "id": 17, 
    "title": "Installation For All ELD Systems", 
    "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

    { "id": 18, 
    "title": "Fleet Management Software System", 
    "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },
      
  ]);

  return (
    <div>
      <div className="automotive-services-banner">
        <h1 className='pt-80 pb-60 font-bold text-white text-center p-20 text-4xl'>Automotive Services</h1>
      </div>
      <div className='p-3 bg-gray-100'>
        {items.map((item, index) => (
          <div key={index} className={`bg-${item.id} mb-3 mb-3 p-10 xl:py-80 py-40 flex ${item.id % 2 === 0 ? 'flex-row-reverse': ''}`}>
            <div className='bg-sky-300/50 max-w-lg p-3 shadow-2xl'>
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
