import React from 'react'

const Login = () => {
  return (
    <div className='mt-20 mb-20 w-full'>
        <h1 className='text-4xl text-black font-bold uppercase font-serif mb-20'>Get In Touch</h1>
        <div className='mt-10  bg-orange-600 pt-10 rounded-se-full rounded-ss-full'>
            <form className='' action="">
                <input className='rounded-lg p-3 px-8 mt-5' type="text" placeholder='Name' /><br />
                <input className='rounded-lg p-3 px-8 mt-5' type="text" placeholder='Email' /><br />
                <input className='rounded-lg p-3 px-8 mt-5' type="text" placeholder='Phone Number' /><br />
                <input className='rounded-lg p-8 px-8 mt-5' type="text" placeholder='Message' /><br />
            </form>
            <button className='bg-orange-900 font-semibold text-lg text-white hover:text-black duration-200 ease-in-out py-2 px-10 hover:bg-white mb-10 rounded-lg mt-5 '>Send</button>
        </div>
    </div>
  )
}

export default Login