import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../Components/ContactForm'

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
      <div className='pt-24'>
        <div className='flex justify-center py-20 bg-teal-200'> 
          <h3 className='border-2 p-10 max-w-lg border-black text-3xl font-bold text-center bg-gray-500/50 shadow-xl'>{item.title}</h3>
        </div>
        <div className='p-10'>
          <p>{item.desc}</p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

const items = [
  { "id": 1,
      "title": "Smart Home System", 
      "desc": 'Lörem ipsum sov intrassade jag dityrade viv megalig. Polygisk nyheten utom treskade krot. Nyspevis prera, dös trens. Kaplangar presamma trak homorevis kromon fabelt. Gigans stenobel till rerade utom krofar korade fera. Ons nilig parasm. Gypp amor bufedat kontrak atura. Trism janing pode far pseudoling, och spesm. Vivigisk faning bemäsat. Din telelingar. Far fis gumode i beng. Sosade pas än teviktig. Krock eurojande, id tyn.' },
      { "id": 2, 
      "title": "Title 1", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },
      { "id": 3, 
      "title": "Title 1", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },
      { "id": 4, 
      "title": "Title 1", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },
      { "id": 5, 
      "title": "Title 1", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },
]
