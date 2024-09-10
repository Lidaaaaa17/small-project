import React from 'react'
import j4 from '../assets/j4.jpg'
import j2 from '../assets/j2.jpg'
import j3 from '../assets/j3.jpg'

const Review = () => {
  return (
    <div className='mt-10 '>
        <h1 className='font-serif font-bold text-4xl'>What Customers say?</h1>
        <div className='grid md:grid-cols-5 gap-6 mt-10 items-center justify-center'>
            <span><i class="text-3xl bg-orange-600 py-2 px-5 text-white hover:bg-gray-600 ease-in duration-200 fa-solid fa-angle-left"></i></span>
            <div className=' border-2 block items-center justify-center'>
                <img className='w-[150px] h-[200px] ml-[7rem] md:ml-[2.5rem] mt-5 mb-3' src={j4} alt="" />
                <span className='text-xl font-semibold pt-3'>Justin Bieber</span>
                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, sed.</p>
            </div>
            <div className=' border-2 flex-col items-center justify-center'>
                <img className='w-[150px] h-[200px] ml-[7rem] md:ml-[2.5rem] mt-5 mb-3' src={j2} alt="" />
                <span className='text-xl font-semibold pt-3'>chico lachowski</span>
                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, sed.</p>
            </div>
            <div className=' border-2 block items-center justify-center'>
                <img className='w-[150px] h-[200px]  ml-[7rem] md:ml-[2.5rem] mt-5 mb-3 ' src={j3} alt="" />
                <span className='text-xl font-semibold mt-4'>jordan barret</span>
                <p className='pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, sed.</p>
            </div>
            <span><i class="text-3xl bg-orange-600 py-2 px-5 text-white hover:bg-gray-600 ease-in duration-200 fa-solid fa-angle-right"></i></span>
        </div>
    </div>
  )
}

export default Review