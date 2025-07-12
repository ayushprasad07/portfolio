"use client"
import React from 'react'
import skills from '../data/teckskills.json'
import { StarsBackground } from './ui/stars-background'
import { ShootingStars } from './ui/shooting-stars'
import { HoverEffect } from './ui/card-hover-effect'


interface Skill{
    id:number,
    name: string,
    image:string,
    detail:string,
    isFeatured: boolean
}



const AboutTeck = () => {
  return (
    <div className="h-[45rem] p-8 relative flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
                <ShootingStars />
                <StarsBackground />
            <div>
                <div className="text-center">
                    <p className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                    Technical Skills
                    </p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>

    </div>

  )
}

export const projects = [
  {
    title: "JavaScript",
    description: "Core language for building interactive web applications.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    title: "TypeScript",
    description: "JavaScript with type safety, enhancing developer productivity.",
    link: "https://www.typescriptlang.org"
  },
  {
    title: "React",
    description: "JavaScript library for building user interfaces using components.",
    link: "https://reactjs.org"
  },
  {
    title: "Next.js",
    description: "React framework with server-side rendering and routing capabilities.",
    link: "https://nextjs.org"
  },
  {
    title: "Node.js",
    description: "JavaScript runtime for building scalable backend services.",
    link: "https://nodejs.org"
  },
  {
    title: "MongoDB",
    description: "NoSQL database used for storing JSON-like data structures.",
    link: "https://www.mongodb.com"
  }
];

export default AboutTeck
