import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import movieCorn from '../public/assets/moviecorn.jpg'
import Ecommerce from '../public/assets/ecommerce.jpg'
import Insta from '../public/assets/insta.jpg'
import Recipe from '../public/assets/recipe.jpg'
import Tesla from '../public/assets/tesla.jpg'
import SingleProject from './SingleProject'
import whatsapp from '../public/assets/whatsapp.jpg'

function Projects() {
  return (
    <div id='projects' className='w-full dark:bg-[#18183b]'>
      <div className='mx-auto max-w-[1240px] px-2 py-16 dark:bg-[#18183b]'>
        <p className='uppercase font-bold text-xl tracking-widest text-[#5651e5] dark:text-yellow-500'>Projects</p>
        <h2 className='py-4 dark:text-lime-500'>What I have built</h2>
         <div className='grid md:grid-cols-2 gap-8'>
             <SingleProject title="MovieCorn" background={movieCorn} url='/moviecorn' tech="React Js & API"/>
             <SingleProject title="Tasty Recipes" background={Recipe} url='/food' tech="React Js & API"/>
             <SingleProject title="ChatApp" background={whatsapp} url='/chatApp' tech="React Js & Firebase"/>
             <SingleProject title="Instagram-clone" background={Insta} url='/insta' tech="React Js & Firebase"/>
             <SingleProject title="Tesla Homepage" background={Tesla} url='/tesla' tech="React Js"/>
             <SingleProject title="E-commerce" background={Ecommerce} url='/ecommerce' tech="HTML & CSS"/>
         </div>
       </div>
    </div>
  )
}

export default Projects