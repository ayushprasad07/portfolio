"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import skills from '../data/teckskills.json'
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image'

export interface Skill{
    id:number,
    name: string,
    image:string,
    detail:string,
    isFeatured: boolean
} 

const TechnicalSkills = () => {
    const techSkills = skills.skills.filter((skills:Skill) => skills.isFeatured);
    
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Technical Skills</h2>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {techSkills.map((skills:Skill)=>(
              <div key={skills.id}  className="flex justify-center">
                <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <Image src={skills.image} alt='image' width={64} height={64} className="object-contain w-16 h-16 mx-auto"/>
                    <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{skills.name}</p>
                    <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{skills.detail}</p>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href={'/about'}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    View More
                </Button>
            </Link>
      </div>
    </div>
  )
}

export default TechnicalSkills
