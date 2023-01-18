import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SingleProject({title,background,url,tech}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] dark:hover:bg-gradient-to-r from-[#367c30] to-[#45a55a]'>
    <Image className='rounded-xl group-hover:opacity-10' src={background} alt='/'/>
    <div className='hidden group-hover:block absolute top:[45%] sm:top-[38%] left-[50%] translate-x-[-50%] translate-y[-50%]'>
        <h3 className='text-3xl tracking-wider text-white'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={url}>
         <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default SingleProject