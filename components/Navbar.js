import Link from 'next/link'
import React,{use, useState,useEffect} from 'react'
import  { AiFillInstagram, AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/router';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

function Navbar() {
   const[nav,setNav] = useState(false);
   const[shadow,setShadow] = useState(false);
   const[navBg,setNavBg] = useState("#ecf0f3");
   const[linkColor,setlinkColor] = useState("#1f2937");
   const router = useRouter();
   
   useEffect(()=>{
      if(router.asPath == '/moviecorn' || router.asPath=='/ecommerce' || router.asPath=='/food' || router.asPath=='/insta' || router.asPath=="/tesla" || router.asPath=='/chatApp'){
          setNavBg("transparent");
          setlinkColor("#ecf0f3");
      }
      else{
        setNavBg('#ecf0f3');
        setlinkColor("#1f2937")
      }


   },[router])

   const handleNav = ()=>{
     setNav(true);
   }

   const handleClose = ()=>{
      setNav(false);
   }
   const handleShadow = ()=>{
    if(window.scrollY>=90){
      setShadow(true);
    }
    else{
      setShadow(false);
    }

  }

   useEffect(()=>{
     
    console.log("useeffect was called");
    window.addEventListener('scroll',handleShadow)
      
   },[])
  

  return (
    <div style={{'backgroundColor':`${navBg}`}} className={shadow? 'fixed w-full h-20 shadow-xl z-[100]':'fixed w-full h-20  z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:bg-[#18183b]'>
          <h2 className='font-extrabold text-[#5651e5] sm:px-2 font-sans text-3xl dark:text-yellow-500'>HMD</h2>
          <div>
            <ul style={{'color':`${linkColor}`}} className='hidden md:flex'>
                <Link href='/#home' ><li className='ml-10 text-sm uppercase dark:text-lime-500'>Home</li></Link>
                <Link href='/#about' ><li className='ml-10 text-sm uppercase dark:text-lime-500'>About</li></Link>
                <Link href='/#skills' ><li className='ml-10 text-sm uppercase dark:text-lime-500'>Skills</li></Link>                
                <Link href='/#projects' ><li className='ml-10 text-sm uppercase dark:text-lime-500'>Projects</li></Link>                
                <Link href='/#contacts' ><li className='ml-10 text-sm uppercase dark:text-lime-500'>Contact</li></Link>                

            </ul>
            <div className='md:hidden' onClick={setNav}>
               <AiOutlineMenu size={25} className='dark:text-white'/>
            </div>
          </div>
        </div>
        
        <div className={nav? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500 ':''}>
          <div className={nav? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500':'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
                <div>
                    <div className='flex justify-between items-center w-full'>
                    <h2 className='font-extrabold text-blue-800 sm:px-2 font-sans text-3xl'>HMD</h2>
                     <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose onClick={handleClose}/>
                     </div>
                    </div>

                    <div className='border-b border-gray-400 my-4'>
                        <p className='w-[100%] md:w-[90%] text-xs sm:text-base py-4' >Lets build something great together...</p>
                    </div>
                </div>
                <div className='flex flex-col py-4'>
                    <ul className='uppercase'>
                        <Link href="/#home"><li className='py-4 text-sm'  onClick={()=>setNav(false)}>Home</li></Link>
                        <Link href="/#about"><li className='py-4 text-sm' onClick={()=>setNav(false)}>About</li></Link>
                        <Link href="/#skills"><li className='py-4 text-sm' onClick={()=>setNav(false)}>Skills</li></Link>
                        <Link href="/#projects"><li className='py-4 text-sm' onClick={()=>setNav(false)}>Projects</li></Link>
                        <Link href="/#contacts"><li className='py-4 text-sm' onClick={()=>setNav(false)}>Contact</li></Link>
                    </ul>

                  <div className='pt-20'>
                      <p className='uppercase tracking-wider text-[#5651e5] font-bold'>Lets Connect</p>
                      <div className='flex items-center justify-between my-4 sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
                        <FaLinkedinIn/>
                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
                        <FaGithub/>
                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
                        <AiOutlineMail/>
                        </div>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'>
                        <AiFillInstagram/>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Navbar