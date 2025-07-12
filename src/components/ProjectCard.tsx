'use client'
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const projects = [
  {
    quote: "A fully responsive weather website built using React and an external API. It shows real-time weather data including temperature, wind speed, humidity, and UV index.",
    name: "Weather App",
    title: "Real-time Weather Forecast with React"
  },
  {
    quote: "A static front-end clone of Amazon Prime Video using only HTML and CSS. It focuses purely on replicating the visual layout of the Prime Video UI.",
    name: "Prime Video Clone",
    title: "Amazon Prime UI Replica"
  },
  {
    quote: "A web platform to connect students with home tutors. Teachers can register their availability and rates, while students can find suitable tutors. The app includes a 10% commission system and admin panel.",
    name: "TutorConnect",
    title: "Student-Tutor Matching Platform"
  },
  {
    quote: "A MERN-based web app designed for residential societies. Features include digital notices, event postings, emergency contacts, and buy/sell boards—all managed by authorized users.",
    name: "Society Connect",
    title: "Digital Notice Board for Communities"
  }
]


const ProjectCard = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div className={cn(
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <h2 className="text-3xl font-bold text-center mb-8 z-10"> Project overview</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={projects}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ProjectCard
