import React from 'react'

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
  return (
    <div className='flex items-center justify-between p-4'>
      <div className="logo text-2xl font-bold text-white cursor-pointer">
        Mohcine
      </div>
      <div className="items">
        <ul className='flex items-center justify-center'>
        {
            MenuList.map((menu) => (
                <li key={menu.id} className='text-xl text-white cursor-pointer mx-3'>
                    {menu.name}
                </li>
            ))
        }
        </ul>
      </div>
      <div className="btn">
        <button className='bg-white rounded-xl text-black py-2 px-8'>Contact us</button>
      </div>
    </div>
  )
}

export default Navbar
