import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-sky-300 p-8 drop-shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-2xl">JE Smart Tech</h1>
        <div className="space-mx-4 flex space-x-3 text-xl text-teal-700 self-center">
          <Link className="hover:text-teal-950" to="/">Home</Link>
          <Link className="hover:text-teal-950" to="/about">About</Link>
          <Link className="hover:text-teal-950" to="/our-services">Our Services</Link>
          <Link className="hover:text-teal-950" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
