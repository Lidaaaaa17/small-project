import React from 'react'
import lambo from '../assets/lambo.png'
import car from '../assets/car.jpg'
import car2 from '../assets/car2.jpg'
import red from '../assets/red.jpg'
const Car = () => {
  return (
    <div className='mt-8'>
        <h1 className='text-4xl font-bold uppercase font-serif'>Our best offers</h1>
        <div className='grid md:grid-cols-3 items-center justify-center gap-6'>
            <div className='border-2 mt-5 block item-center justify-center shadow-lg py-5 px-2 hover:shadow-orange-600 ease-in-out duration-200'>
                <img src={lambo} alt="item" />            
                <p className='uppercase font-semibold text-xl font-serif'>lamborghini</p>
                <p className='font-semibold text-orange-600 text-xl p-3'>Start Per Day $500</p>
                <button className='bg-orange-600 py-2 px-4 mb-3 cursor-pointer hover:bg-gray-600 text-white ease-in duration-200 text-lg'>Book Now</button>
            </div>
            <div className='border-2 mt-5 block item-center justify-center shadow-lg  px-2  hover:shadow-orange-600 ease-in-out duration-200'>
                <img src={car} alt="item" />            
                <p className='uppercase font-semibold text-xl font-serif'>TOYOTA</p>
                <p className='font-semibold text-orange-600 text-xl p-3'>Start Per Day $200</p>
                <button className='bg-orange-600 py-2 px-4 mb-4 cursor-pointer hover:bg-gray-600 text-white ease-in duration-200 text-lg'>Book Now</button>
            </div>
            <div className='border-2 mt-5 block item-center justify-center shadow-lg py-4 px-2  hover:shadow-orange-600 ease-in-out duration-200'>
                <img src={car2} alt="item" />            
                <p className='uppercase font-semibold text-xl font-serif'>SSV</p>
                <p className='font-semibold text-orange-600 text-xl p-3'>Start Per Day $600</p>
                <button className='bg-orange-600 py-2 px-4 mb-2 cursor-pointer hover:bg-gray-600 text-white ease-in duration-200 text-lg'>Book Now</button>
            </div>

        </div>
        <div className='grid md:grid-cols-3 items-center justify-center gap-6'>
            <div className='border-2 mt-5 block item-center justify-center shadow-lg py-5 px-2 hover:shadow-orange-600 ease-in-out duration-200'>
                <img src={red} alt="item" />            
                <p className='uppercase font-semibold text-xl font-serif'>mc LAREN</p>
                <p className='font-semibold text-orange-600 text-xl p-3'>Start Per Day $400</p>
                <button className='bg-orange-600 py-2 px-4 mb-3 cursor-pointer hover:bg-gray-600 text-white ease-in duration-200 text-lg'>Book Now</button>
            </div>
            <div className='border-2 mt-5 block item-center justify-center shadow-lg  px-2 py-2 hover:shadow-orange-600 ease-in-out duration-200'>
                <img src={car2} alt="item" />            
                <p className='uppercase font-semibold text-xl font-serif'>SSV</p>
                <p className='font-semibold text-orange-600 text-xl p-3'>Start Per Day $200</p>
                <button className='bg-orange-600 py-2 px-4 mb-4 cursor-pointer hover:bg-gray-600 text-white ease-in duration-200 text-lg'>Book Now</button>
            </div>
            <div className='border-2 mt-5 block item-center justify-center shadow-lg py-4 px-2  hover:shadow-orange-600 ease-in-out duration-200'>
                <img src={lambo} alt="item" />            
                <p className='uppercase font-semibold text-xl font-serif'>lamborghini</p>
                <p className='font-semibold text-orange-600 text-xl p-3'>Start Per Day $500</p>
                <button className='bg-orange-600 py-2 px-4 mb-2 cursor-pointer hover:bg-gray-600 text-white ease-in duration-200 text-lg'>Book Now</button>
            </div>
    
        </div>
    </div>
  )
}

export default Car