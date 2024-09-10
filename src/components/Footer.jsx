import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-600 text-white'>
        <div className='px-10'>
            <h1 className='text-3xl font-bold font-serif pt-5 pb-5'>Rent Car</h1>
            <div className='grid md:grid-cols-5'>
                <div className='block items-center justify-center py-5 px-7'>
                <h1 className='text-2xl font-bold font-serif'>Subscribe Now</h1>
                <p className='pt-5'>There are many variations of passages of Lorem Ipsum available,</p>
                <input type="text" placeholder='Enter Your Email' className='bg-gray-600 pt-5 text-white border-b-2 outline-none' /> <br />
                <button className='bg-orange-600 py-2 px-5 rounded-md text-white hover:bg-gray-600 ease-in-out duration-200 mt-5'>Subcribe</button>
                </div>
                <div>
                    <h1 className='text-2xl font-bold font-serif pt-5'>Information</h1>
                    <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe vero,<br /> consequatur in voluptates facilis ad eos <br />pariatur? Officia optio quam ex porro alias. </p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold font-serif pt-5'>Helpful Links</h1>
                    <p className='pt-5'> Ipsam saepe vero,<br /> consequatur in voluptates facilis ad <br /> eos pariatur? Officia optio quam ex porro alias,<br />eius animi quis eos neque tempore?</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold font-serif pt-5'>Invesments</h1>
                    <p className='pt-5'>Lorem ipsum dolor sit <br /> amet consectetur ,<br /> consequatur in voluptates <br />facilis ad eos <br />pariatur? Officia optio quam ex porro alias, eius animi quis eos neque tempore?</p>
                </div>
                <div className='block'>
                    <h1 className='text-2xl font-bold font-serif pt-5'>Contact Us</h1>
                   <span><i class="fa-solid fa-location-dot p-2"></i> Location</span><br />
                   <span><i class="fa-solid fa-phone p-2"></i> (+855) 1435265243</span><br />
                   <span><i class="fa-solid fa-envelope p-2"></i> Demo@gmail.com</span>
                   <div className='flex text-2xl items-center justify-center cursor-pointer'>
                   <span >
                    <i class="fa-brands fa-facebook p-4"> </i>
                    <i class="fa-brands fa-instagram p-4"></i>
                    <i class="fa-brands fa-twitter p-4"></i>
                </span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer