import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../Components/ContactForm'
import '../css-files/service.css'
// import clouds from '../assets/clouds.png'

export default function Service() {
  const { id } = useParams();

  const [item, setItem] = useState(null)

  useEffect(() => {
    // Find the item with the matching ID
    const selectedItem = items.find(item => item.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  // Fetch the item details using the ID and display them

  return (
    <div className=''>
      <div className='pt-14 sm:pt-20'>
        <div className={`flex justify-center px-5 py-20 bg-${item.id}`}> 
          <h3 className='border-2 p-10 max-w-lg border-black text-3xl font-bold text-center bg-gray-500/50 shadow-xl'>{item.title}</h3>
        </div>
        <div className='p-10'>
          <h1 className='text-3xl mb-10'>{item.title}</h1>
          <p>{item.desc}</p>
        </div>
      </div>
      <div className='bg-stone-300 px-9 py-5 sm:py-20 sm:px-20 my-3'>
        <h1 className='lg:text-5xl sm:text-3xl text-xl'>Contact Us</h1>
      </div>
      <div className={``}>
        <ContactForm />
      </div>
    </div>
  );
}

const items = [
  { "id": 1,
      "title": "Surveillance Systems & Cameras", 
      "desc": 'Lörem ipsum sov intrassade jag dityrade viv megalig. Polygisk nyheten utom treskade krot. Nyspevis prera, dös trens. Kaplangar presamma trak homorevis kromon fabelt. Gigans stenobel till rerade utom krofar korade fera. Ons nilig parasm. Gypp amor bufedat kontrak atura. Trism janing pode far pseudoling, och spesm. Vivigisk faning bemäsat. Din telelingar. Far fis gumode i beng. Sosade pas än teviktig. Krock eurojande, id tyn.' },

      { "id": 2, 
      "title": "Backup Camera Systems", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

      { "id": 3, 
      "title": "Monitored Alarm System", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },

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
]
