'use client'
import React from 'react'
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import projectData from '@/data/projects.json';

const Work = () => {
  return (
    <div className='min-h-screen bg-black py-12 pt-36'>
      <h1 className='text-4xl text-center md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600'>Projects ({projectData.projects.length})</h1>
      <div className='flex flex-wrap justify-center'>
        {projectData.projects.map((project,index)=>(
            <CardContainer className="inter-var m-4" key={index}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    {project.name}
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    {project.quote}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    {/* <CardItem
                        translateZ={20}
                        as="a"
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem> */}
                    {/* <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sign up
                    </CardItem> */}
                    </div>
                </CardBody>
            </CardContainer>
        ))}
      </div>
    </div>
  )
}

export default Work
