"use client";
import React, { useState } from 'react'

const MenuList = [
    {
        id : 1,
        name : 'About us'
    },
    {
        id : 2,
        name : 'Services'
    },
    {
        id : 3,
        name : 'Projects'
    },
    {
        id : 4,
        name : 'Contact'
    },
]
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Logo image visible sur mobile uniquement */}
      <div
        className="block md:hidden w-10 h-10 text-white text-2xl font-bold">M</div>
      <div className="hidden md:block logo text-2xl font-bold text-white cursor-pointer">
        Mohcine
      </div>
      <div className="items hidden md:flex items-center">
        <ul className='flex items-center'>
        {
            MenuList.map((menu) => (
                <li key={menu.id} className='text-base text-white cursor-pointer mx-3'>
                    {menu.name}
                </li>
            ))
        }
        </ul>
      </div>
      <div className="btn hidden md:block">
        <button className='bg-white rounded-xl text-black py-2 px-8 cursor-pointer'>Contact us</button>
      </div>
      {/* Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {MenuList.map((menu) => (
              <li key={menu.id} className='cursor-pointer'>{menu.name}</li>
            ))}
            <li>
              <button className='bg-white text-black py-2 px-6 rounded-xl'>Contact us</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
