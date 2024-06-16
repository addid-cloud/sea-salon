import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-row justify-end items-center pt-20'>
    <img src="image/hero effect.png" className='w-1/2 absolute left-0 bottom-0' alt="" />
    <div className='flex flex-col items-center'>
    <img src="image/slogan.png " className='self-center item' alt="" />
    <h3 className='text-2xl font-bold w-2/3 text-center '>ubah ulang gayamu menjadi seperti karakter fiksi idamanmu</h3>
    <img src="/image/" alt="" />
    </div>
    <img src="image/model.png" className='w-1/2' alt="" />
    </div>
  )
}

export default HeroSection