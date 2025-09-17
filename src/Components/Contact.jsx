import React from 'react'

function Contact() {
  return (
    <div id='contact' className='text-center p-10 bg-slate-200'> 
        <p className='text-3xl bg-amber-300 p-4 w-100 m-auto font-semibold rounded-lg shadow-xl'>Contact Information</p> 
    <h1 className='text-3xl font-semibold'>Email:</h1>
      <p className='drop-shadow-[0_0_20px_#ffa500]'>jothimanidhivakar2020@gmail.com</p>
    <h1 className='text-3xl font-semibold'>Phone:
    </h1>
    <p>8129047190</p>
    <h1 className='text-3xl font-semibold'>Address:</h1>
    <p>Coimbatore,TamilNadu,India</p>
    <h1 className='text-3xl font-semibold'>LinKedIn:
    </h1>        <a href="https://www.linkedin.com/in/dhivakar-jothimani-19600b212" className='text-blue-600 hover:underline'>LinkedIn/Dhivakar</a>
    <h1 className='text-3xl font-semibold'>GitHub: </h1>
    <a href="https://github.com/Dhiva2003" className='text-blue-600 hover:underline'>GitHub/Dhivakar</a>
    </div>

    
  )
}

export default Contact