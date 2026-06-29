import { Analytics } from '@vercel/analytics/react';
import NavBar from "./components/NavBar"
import HeroSection from "./components/Hero"
import SkillOrbit from "./components/SkillOrbit";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";

function App(){
  return (
    <main>
      <NavBar />
      <HeroSection />
      <SkillOrbit />
      <Timeline />
      <ProjectGrid />
      <Analytics />
    </main>
  );
}

export default App;