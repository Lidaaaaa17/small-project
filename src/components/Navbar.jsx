import React, { useState } from 'react'
import {AiFillPhone, AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav);
  }
  return (
 <div className='w-full bg-black relative '>
  <div className='text-white flex flex-row item-center justify-between py-7 px-5'>
    <h1 className='text-4xl font-bold '>Rent Car</h1>
    <ul className=' hidden md:flex gap-6 text-lg'>
      <li className='hover:text-orange-600 duration-300'><a href="#">Home</a></li>
      <li className='hover:text-orange-600 duration-300'><a href="#">About</a></li>
      <li className='hover:text-orange-600 duration-300'><a href="#">Services</a></li>
      <li className='hover:text-orange-600 duration-300'><a href="#">Vehicles</a></li>
      <li className='hover:text-orange-600 duration-300'><a href="#">Client</a></li>
      <li className='hover:text-orange-600 duration-300'><a href="#">Contact</a></li>
    </ul>
    <div onClick={handleNav} className='absolute right-5 block md:hidden bg-white text-gray-400 py-2 px-4 rounded-sm text-2xl p-4 flex-block item-center justify-center '>
      {!nav ? <AiOutlineMenu/> : <AiOutlineClose/>}
    </div>
    <div className={nav ? 'bg-black absolute left-0 top-[6rem] p-5 w-full duration-500 ease-in transition-transform ' :'left-0 top-10 w-full hidden  '}>
    <ul className='text-lg'>
      <li className='p-3 hover:text-orange-600 duration-300'><a href="#">Home</a></li>
      <li className='p-3 hover:text-orange-600 duration-300'><a href="#">About</a></li>
      <li className='p-3 hover:text-orange-600 duration-300'><a href="#">Services</a></li>
      <li className='p-3 hover:text-orange-600 duration-300'><a href="#">Vehicles</a></li>
      <li className='p-3 hover:text-orange-600 duration-300'><a href="#">Client</a></li>
      <li className='p-3 hover:text-orange-600 duration-300'><a href="#">Contact</a></li>
    </ul>
   
    </div>
    
  </div>
  <div className='w-full bg-orange-600 h-14 hidden md:flex item-center justify-between'>
  <ul className='flex items-center justify-between w-full px-5 cursor-pointer'>
    <li className='hover:text-gray-600'><a href="#"><i class="fa-solid fa-location-dot"></i> Location</a></li>
    <li className='hover:text-gray-600'><a href="#"><i class="fa-solid fa-phone"></i> (+855) 987348934</a></li>
    <li className='hover:text-gray-600'><a href="#"><i class="fa-solid fa-envelope"></i> Demo@gmail.com</a></li>
  </ul>
</div>
 </div>
  
  )
}

export default Navbar