import React from 'react'
import Image from 'next/image'

function SingleSkill({image,title}) {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:border border-lime-500'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
           <Image src={image} width='64' height='64' alt='/'/>

        </div>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='dark:text-lime-500'>{title}</h3>
        </div>
    </div>
  </div>
  )
}

export default SingleSkill