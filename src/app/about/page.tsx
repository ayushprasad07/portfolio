import AboutTeck from '@/components/AboutTeck'
import Introduction from '@/components/Introduction'
import Studies from '@/components/Studies'
import React from 'react'

const About = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Introduction/>
      <AboutTeck />
      <Studies/>
    </main>
  )
}

export default About
