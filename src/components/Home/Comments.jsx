import { Footprints, Star } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

const Comments = ({buttonLink}) => {
  return (
    <div>
    <div className='flex flex-col items-center'>
      {buttonLink ? null : (<img src="/image/SE.png" className='absolute w-24 right-4' alt="" />)}
      <h2 className='text-4xl font-semibold pt-4 '>Public Figure Said </h2>
      <div className='bg-black w-72 h-2'/>
    </div>
    <div className='flex flex-row items-center justify-center gap-9 my-9'>
        <div className='w-52 bg-slate-950 p-2 rounded shadow shadow-black relative mt-7'>
          <div className='bg-white w-5 h-5 rounded-full absolute right-3 top-2'/>
        <img src="/image/model2.jpg_large" className='aspect-square  object-cover mt-8 rounded-sm' alt="" />
        <h2 className='text-xl font-semibold text-white'>Kobokan aer</h2>
        <h3 className='text-slate-100 text-sm line-clamp-2'>salon di sini sangat baik banget pelayananya</h3>
        <div className='flex flex-row mt-4'>
        <Star size={32} color="#faf200" weight="fill" />
        <Star size={32} color="#faf200" weight="fill" />
        <Star size={32} color="#faf200" weight="fill" />
        <Star size={32} color="#faf200" weight="fill" />
        <Star size={32} color="#faf200"  />
        </div>
        </div>
      <div className='w-52 bg-slate-950 p-2 rounded shadow shadow-black relative'>
        <div className='bg-white w-5 h-5 rounded-full absolute right-3 top-2'/>
      <img src="/image/model1.jpg" className='aspect-square  object-cover mt-8 rounded-sm' alt="" />
      <h2 className='text-xl font-semibold text-white'>jeta kawe</h2>
      <h3 className='text-slate-100 text-sm line-clamp-2'>semenjak saya menjadi pelanggan setia suami semakin nempel</h3>
      <div className='flex flex-row mt-4'>
      <Star size={32} color="#faf200" weight="fill" />
      <Star size={32} color="#faf200" weight="fill" />
      <Star size={32} color="#faf200" weight="fill" />
      <Star size={32} color="#faf200" weight="fill" />
      <Star size={32} color="#faf200"  />
      </div>
      </div>
      <div className='w-52 bg-slate-950 p-2 rounded shadow shadow-black relative mt-7'>
        <div className='bg-white w-5 h-5 rounded-full absolute right-3 top-2'/>
      <img src="/image/model3.webp" className='aspect-square  object-cover mt-8 rounded-sm' alt="" />
      <h2 className='text-xl font-semibold text-white'>furina kawe</h2>
      <h3 className='text-slate-100 text-sm'>bintang 5 pokoknya rekomended banget</h3>
      <div className='flex flex-row mt-4'>
      <Star size={32} color="#faf200" weight="fill" />
      <Star size={32} color="#faf200" weight="fill" />
      <Star size={32} color="#faf200" weight="fill" />
      <Star size={32} color="#faf200" weight="fill" />
      <Star size={32} color="#faf200"  weight="fill" />
      </div>
      </div>
    </div>
    {buttonLink ? null :(
            <div>
            <Link href={"/komentar"}><button className='bg-black text-white p-10 text-center'>Leave a Trace <Footprints className='text-center w-full' weight='fill'/></button> </Link>
          </div>
    )}

    </div>
  )
}

export default Comments