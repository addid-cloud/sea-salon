import React from 'react'

const About = () => {
  return (
    <div className='relative m-3 mx-0 w-full'>
            <div className='bg-black w-1/4 h-4' />
        <div className='flex flex-row  items-center py-4 '> 
            <img src="/image/benner thomas.png" alt="" 
            className='w-64'
            />
        <img src="/image/thomas.png" alt="" 
        className='w-80  ml-24'
        />
        <div className='text-left flex flex-col items-end mr-36 w-1/2'>
            <h3 className='font-bold text-4xl mb-3'>About Us</h3>
            <p className=' text-right'>SEA - salon merupakan salon kencatikan pertama di indonesia, yang mana menyediakan model rambut bergaya anime. salon ini sendiri sudah berdiri sejak 1945. <br /> salon ini tidak memiliki cabang untuk menjaga gaya anime yang lebih kental dan agar terasa limited edition </p>
            <div className='bg-black w-32 h-4' />
        </div>
        </div>
    <img 
        src="/image/hero effect 2.png" 
        className="absolute z-10 object-fill top-0 left-0 w-full h-full  pointer-events-none"
        alt="Effect"
      />
            <div className='bg-black w-1/4 h-4' />
            <img src="/image/bulet.png" className='absolute w-32 right-4 bottom-10' alt="" />
            <img src="/image/logob.svg" className='absolute w-32 right-40 bottom-10' alt="" />
    </div>
  )
}

export default About