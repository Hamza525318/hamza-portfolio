import Image from 'next/image';
import React from 'react'
import ContactImg from '../public/assets/contact.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp,FaLinkedinIn,FaInstagram, FaGit } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link';


function Contact() {
  return (
    <div id='contacts' className='w-full h-auto dark:bg-[#18183b]'>
        <div className='m-auto max-w-[1240px] dark:bg-[#18183b]  py-16 w-full'>
           <p className='uppercase text-xl tracking-widest font-bold text-[#5651e5] dark:text-yellow-500'>Contact</p>
           <h2 className='py-4 dark:text-lime-500'>Get In Touch</h2>
           <div className='grid lg:grid-cols-5 gap-8'>
            <div className='sm:col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl shadow-gray-400 p-4 m-4 dark:bg-[#18183b]'>
              <div className='lg:p-4 h-full'>
                 <div>
                 <Image className='roundex-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="/"/>
                 </div>
              <div>
                <h2 className='py-2 dark:text-yellow-500'>Hamza Mustafa</h2>
                <p className='py-4 dark:text-lime-500'>I am available for freelancing or Internship positions. Contact me and lets talk</p>
              </div>
              <div className='py-4 lg:py-12'>
                <p className='uppercase pt-8 dark:text-lime-500'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500 dark:border border-lime-500'>
                  <Link href="https://www.linkedin.com/in/hamza-mustafa-065317233/" target="_blank"><FaLinkedinIn className='dark:text-lime-500'/></Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500 dark:border border-lime-500'>
                  <FaWhatsapp  className='dark:text-lime-500'/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500 dark:border border-lime-500'>
                 <Link href="https://github.com/Hamza525318" target="_blank"><FaGit  className='dark:text-lime-500'/></Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500 dark:border border-lime-500'>
                  <FaInstagram  className='dark:text-lime-500'/>
                </div>
                </div>
              </div>
            </div>
            </div>
         
         <div className='col-span-3 shadow-xl w-full h-auto shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
               <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='text-sm py-2 uppercase dark:text-lime-500'>Name</label>
                    <input type="text" className='border-2 rounded-lg p-3 border-gray-300 dark:text-white'/>
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm py-2 uppercase dark:text-lime-500'>Phone Number</label>
                    <input type="text" className='border-2 rounded-lg p-3 border-gray-300 dark:text-white'/>
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                <label className='text-sm py-2 uppercase dark:text-lime-500'>Email</label>
                    <input type="text" className='border-2 rounded-lg p-3 border-gray-300 dark:text-white'/>
                </div>
                <div className='flex flex-col py-2'>
                <label className='text-sm py-2 uppercase dark:text-lime-500'>Subject</label>
                    <input type="text" className='border-2 rounded-lg p-3 border-gray-300 dark:text-white'/>
                </div>
                <div className='flex flex-col py-2'>
                <label className='text-sm py-2 uppercase dark:text-lime-500'>Message</label>
                   <textarea className='border-2 rounded-lg p-3 border-gray-300 dark:text-white' rows="10"></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4 dark:shadow-none bg-lime-500'>Send Message</button>
                </form>
            </div>
         </div>
         </div>

         <div className='flex justify-center py-10'>
            <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 duration-300 ease-in-out dark:border border-lime-500'>
                <HiOutlineChevronDoubleUp className='m-auto text-[#5651e5] dark:text-lime-500' size={30}/>
              </div>
            </Link>
         </div>
      </div>
     </div>
  )
}

export default Contact