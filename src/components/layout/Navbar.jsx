import React from 'react'

const Navbar = () => {
   return (
      <nav className='bg-gray-800 py-4'>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center'>
               <p className='text-xl font-bold text-white'>Spotify Artist Search</p>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
