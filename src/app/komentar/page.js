import End from '@/components/Home/End'
import Navbar from '@/components/Home/Navbar'
import CommentSection from '@/components/komen/CommentSection'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <CommentSection/>
    <End/>
    </>
  )
}

export default page