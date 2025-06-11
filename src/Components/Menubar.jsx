import React, { useState } from 'react';
import { X, Menu } from 'lucide-react'; 
import { assets } from "../assets/assests.js";
import { Link } from 'react-router-dom';

function Menubar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-white px-8 py-4 flex justify-between items-center relative'>
      
      {/* Logo & Brand */}
      <Link className='flex item-center space-x-2' to="/">
        <img
          src={assets.logo}
          alt="logo"
          className='h-8 w-8 object-contain cursor-pointer'
        />
       
        
        <span className='text-2xl font-semibold text-indigo-700 cursor-pointer'>
          remove.<span className='text-gray-400 cursor-pointer'>bg</span>
        </span>
      </Link>

      {/* Desktop Buttons */}
      <div className='hidden md:flex items-center space-x-4'>
        <button className="text-gray-700 hover:text-blue-500 font-medium">Login</button>
        <button className='bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 transition-all bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-center'>
          Signup
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className='flex md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 w-40 p-4'>
          <button className=' hover:bg-gray-200 text-blue-700 font-medium px-4 py-2 rounded-full text-center'>
            Login
          </button>
          <button className='bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-center'>
            Signup
          </button>
        </div>
      )}

    </nav>
  );
}

export default Menubar;
