import React, { useState } from 'react';
import {BrowserRouter ,Router, Link, Route} from 'react-router-dom'
import Service from './Service';

export default function CamAndSec() {
  const [items, setItems] = useState([
    { "id": 1,
      "title": "Title 1", 
      "desc": "Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde." },
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
  ]);

  return (
      <div>
        <div className='pt-28'>
          <h1 className='text-center p-20 text-4xl'>Cameras and Security</h1>
        </div>
        <div className='p-3 bg-gray-100'>
          {/* <div className='bg-red-400 mb-3 p-3'>
            <div className='bg-sky-300/50 max-w-md p-3'>
              <h1 className='text-xl font-bold mb-5'>Surveillance Systems & Cameras</h1>
              <p className='mb-2'>
                Lörem ipsum befur nott mingar nysal. Homoten tira pas om senat, geore nen. Sulagen vanuda kvasinde.
                Kal kan krovis. Epidat portad och falig i esm synyligt. Rysm kvasiliga i tet tetratede. Båföning ariskapet ore.
                Saresk vynegen.
              </p>
              <a className='text-sky-600' href='#'>Read More...</a>
            </div>
          </div> */}
          {items.map((item, index) => (
            <div key={index} className={`bg-red-400 mb-3 p-3 flex ${item.id % 2 === 0 ? 'flex-row-reverse': ''}`}>
              <div className='bg-sky-300/50 max-w-md p-3'>
                <h2 className='text-lg font-bold mb-2'>{item.title}</h2>
                <p className='mb-3'>{item.desc}</p>
                <Link className='text-sky-600' to={`/service/${item.id}`}>Read More...</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
