import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import TechnicalSkills from '@/components/TechnicalSkills'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <TechnicalSkills/>
      <ProjectCard/>
    </main>
  );
}
