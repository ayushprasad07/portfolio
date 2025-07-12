"use client"
import React from 'react';
import Image from 'next/image';
import { BackgroundBeams } from './ui/background-beams';
import { IconBrandGithub,IconBrandLinkedin,IconMail } from '@tabler/icons-react';



const Introduction = () => {
  return (
    <>
    <div className="h-[55rem] w-full rounded-md bg-neutral-950 relative flex items-center justify-center antialiased">
        <div className="max-w-6xl w-full mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Image
                src="/profile-image.jpeg"
                alt="profile"
                height={300}
                width={300}
                className="rounded-full mx-auto z-10"
            />
            <div>
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                Ayush Prasad
                </h1>
                <h3 className='text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700'>Web Developer</h3>
                <div className='w-full flex justify-between items-center my-4'>
                    <a href="https://github.com/ayushprasad07" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl z-10">
                         <IconBrandGithub size={20} stroke={1.5} className='mx-2' />
                        Git hub
                        </span>
                    </a>
                    <a href='https://www.linkedin.com/in/ayush-prasad-101859326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl z-10">
                        <IconBrandLinkedin size={20} stroke={1.5} className='mx-2'/>
                        Linked in
                        </span>
                    </a>

                    <a href="mailto:ayushprasad2110@gmail.com" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl z-10">
                        <IconMail size={20} stroke={1.5} className='mx-2'/>
                        Email
                        </span>
                    </a>
                </div>
                
            </div>
            <div className="md:col-span-2">
                <p className="w-full mt-5 text-neutral-400 text-base md:text-lg">
                    I'm Ayush Prasad, a dedicated full-stack web developer with a focus on building dynamic and scalable web applications. With hands-on experience in technologies like React, Node.js, Express, MongoDB, and Tailwind CSS, I strive to create seamless user experiences. I've worked on various projects — including educational tools, digital notice boards, and AI-powered platforms — that blend functionality with modern design. Whether it's frontend creativity or backend logic, I enjoy the full spectrum of web development and am always eager to learn, collaborate, and innovate.
                </p>
            </div>
            </div>
        </div>
        <BackgroundBeams />
    </div>
    </>

  );
};

export default Introduction;
