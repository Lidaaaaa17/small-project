import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-600 w-full mt-10'>
            <h1 className='text-white font-bold font-serif text-4xl pt-5 pb-5'>Why Choose Us?</h1>
        <div className='text-white grid md:grid-cols-3 p-2'>
        <div className='p-5'>
        <span><i class="fa-solid fa-shield-halved text-3xl"></i></span> <br />
        <span className='text-xl font-semibold p-2'> SAFETY & SECURITY</span>
        <p className='pt-2 pb-3'>variations of passages of Lorem Ipsum available, but the majority have</p>
        </div>
        <div className='p-5'>
        <span><i class="fa-solid fa-globe text-3xl"></i></span> <br />
        <span className='text-xl font-semibold p-2'> ONLINE BOOKING</span>
        <p className='pt-2 pb-3'>variations of passages of Lorem Ipsum available, but the majority have</p>
        </div>
        <div className='p-5'>
        <span><i class="fa-solid fa-user text-3xl"></i></span> <br />
        <span className='text-xl font-semibold p-2'> BEST DRIVERS</span>
        <p className='pt-2 pb-3'>variations of passages of Lorem Ipsum available, but the majority have</p>
        </div>
        </div>
        
    </div>
  )
}

export default About