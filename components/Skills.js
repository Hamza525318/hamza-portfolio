import Image from 'next/image'
import React from 'react'
import SingleSkill from './SingleSkill'
import SingleProject from './SingleProject'

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 dark:bg-[#18183b]'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full dark:bg-[#18183b]'>
           <p className='uppercase text-xl tracking-widest font-bold text-[#5651e5] dark:text-yellow-500'>Skills</p>
           <h2 className='py-3 dark:text-lime-500'>What can I do</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <SingleSkill image="/../public/assets/skills/html.png" title="HTML"/>
              <SingleSkill image="/../public/assets/skills/css.png" title="CSS"/>
              <SingleSkill image="/../public/assets/skills/javascript.png" title="Javascript"/>
              <SingleSkill image="/../public/assets/skills/react.png" title="React Js"/>
              <SingleSkill image="/../public/assets/skills/nextjs.png" title="Next Js"/>
              <SingleSkill image="/../public/assets/skills/firebase.png" title="Firebase"/>
              <SingleSkill image="/../public/assets/skills/tailwind.png" title="TailWind"/>
           </div>
        </div>
    </div>

  )
}

export default Skills