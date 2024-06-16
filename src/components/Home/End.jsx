import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

const End = () => {
  return (
    <div>
        <h1 className='text-8xl'>YOU CAN'T SCROLL ANYMORE.</h1>
        <h1 className='text-8xl'>BETTER CONTACT US,</h1>
        <div className='flex flex-row '>
        <h1 className='text-8xl'>HERE THE CONTACT :</h1>
        <Link href={"https://wa.me/+628164829372"}><button className='text-4xl p-4 bg-black border border-black text-white ml-10'>Sekar <WhatsappLogo className='inline'/> </button></Link>
        <Link href={"https://wa.me/+628123456789"}><button className='text-4xl p-4 bg-white text-black border border-black'>Thomas <WhatsappLogo className='inline'/> </button></Link>
        </div>

    </div>
  )
}

export default End