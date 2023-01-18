import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='w-full md:h-screen flex items-center py-8 sm:py-16 dark:bg-[#18183b]'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 dark:bg-[#18183b]'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest font-bold text-[#5651e5] dark:text-yellow-500'>About</p>
                <h2 className='py-4 dark:text-lime-500'>Who Am I</h2>
                <p className='py-2 text-gray-600 dark:text-lime-500'> \\Read out at your own risk...</p>
                <p className='py-2 text-gray-600 dark:text-lime-500'>I am a hard working, honest individual. I am a good timekeeper,always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. I am able to work independently in busy environments and also within a team setting.I am a flexible person seeking employment which will allow development, growth and make use of my existing skills.My goal is to build products that are amazing both visually and technically.</p>

                <p className='py-2 text-gray-600 dark:text-lime-500'>I started with HTML and CSS and was even more enthused with making websites interactive.I am now spending my time building projects with React Js, Next Js, Firebase and learning new technologies</p>

                <p className='py-2 text-gray-600 underline cursor-pointer dark:text-yellow-500'>Check out some of my latest projects...</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 my-3 sm:my-0'>
                <Image className='rounded-xl' src="/../public/assets/about.jpg" alt='/' width='300' height='100'/>
            </div>
        </div>
    </div>
  )
}

export default About