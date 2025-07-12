import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

const HeroSection = () => {
  return (
    <div
    className='h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center releative overflow-hidden mx-auto py-18 md:py-0 mt-4'
    >
      <div className='p-4 releative z-10 w-full text-center'>
        <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="blue"
        />
        <h1 className='mt-28 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Seamlessly connecting design and development</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
          I&apos;m Ayush Prasad, a Web Developer passionate about crafting intuitive user experiences. When I&apos;m not coding for clients, I&apos;m busy building my own projects and pushing the boundaries of web innovation.
        </p>
        <div className='mt-8'>
            <Link href={'/about'}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    About
                </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
