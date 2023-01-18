import React, { useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'
import Typewriter from 'typewriter-effect'

function Main() {
   
  const{theme,setTheme} = useTheme();
  useEffect(()=>{
     setTheme('light');
  },[])

  return (
    <div id='home' className=' w-full h-screen text-center dark:bg-[#18183b]'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer absolute top-24 right-4' onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
          {theme ==='light'?<BsFillMoonFill/>:<BsFillSunFill className='dark:text-lime-500'/>}
        </div>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
             
            <div>
               <p className='uppercase text-gray-600 tracking-widest dark:text-lime-500'>LETS BUILD GREAT TOGETHER</p>
               <h1 className='py-4 text-4xl text-gray-700 dark:text-lime-500'>Hi, I am <span className='text-[#5651e5] dark:text-yellow-500'>Hamza</span></h1>
              <h1 className='py-2 text-gray-700 dark:text-lime-500'>
              <Typewriter
                options={{
                strings: ['Front-End Developer'],
                 autoStart: true,
                 loop: true,
                 }}
                />
              </h1>
              <p className='py-4 text-gray-600 max-w-[65%] m-auto dark:text-lime-500'>I am a front-end web developer specialising in designing and building exceptional digital experiences.Currently I am focused on building responsive front-end applications, and learning and exploring the back-end technologies</p>
              <div className='flex items-center justify-between max-w-[300px] m-auto py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500 dark:border border-lime-500  '>
                  <Link href="https://www.linkedin.com/in/hamza-mustafa-065317233/" target="_blank"><FaLinkedinIn className=' text-black dark:text-lime-500'/></Link>
                </div>
                <div className='rounded-full dark:border border-lime-500 shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500'>
                  <Link href="https://github.com/Hamza525318" target="_blank"><FaGithub className='text-black dark:text-lime-500'/></Link>
                </div>
                <div className=' dark:border border-lime-500 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500'>
                  <AiOutlineMail className='text-black dark:text-lime-500'/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500 dark:border border-lime-500'>
                  <FaInstagram className='text-black dark:text-lime-500'/>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Main