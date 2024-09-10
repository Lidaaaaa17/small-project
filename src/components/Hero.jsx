import React from 'react'
import R from '../assets/R.png'
import R2 from '../assets/R2.png'
const hero = () => {
  return (

<div className='bg-white w-full'>
      <div className='w-full grid md:grid-cols-2 mt-[4rem] py-10'>
      <div>
      <h1 className='text-6xl font-bold sm:items-start p-3 font-serif'>Car Rent</h1>
   <h1 className='text-orange-500 text-6xl font-bold p-2 font-serif'>For You</h1>
  <p className='font-semibold p-3'>There are many variations of passages of Lorem Ipsum available, but the majority</p>  
  <div className='flex justify-center item-center gap-6'>
   <button className='bg-orange-600 px-8 py-4 text-white font-semibold hover:bg-gray-700 duration-300 ease-in'>Read More</button>
  <button className='bg-gray-700 text-white py-4 px-8 font-semibold hover:bg-orange-600 duration-300 ease-out'>Contact us</button>  
      </div>
      </div>
      <div className='hidden md:flex'>
    <img src={R} alt="R" />
      </div>
      </div>
      <div className='w-full grid md:grid-cols-2 mt-[4rem]'>
    <div className='hidden md:flex'>
    <img src={R2} alt="R2" />
    </div>
    <div>
    <h1 className='text-5xl font-bold font-serif'>About <span className='text-orange-600'>Us</span></h1>
    <p className='pt-5'>going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
    <button className='bg-orange-600 py-3 px-6 rounded-sm mt-5 text-white font-semibold hover:bg-gray-600 ease-out duration-200  '>Read More</button>
    </div>
      </div>
</div>

  )
}

export default hero