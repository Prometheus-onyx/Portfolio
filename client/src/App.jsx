import NavBar from "./components/NavBar"
import HeroSection from "./components/Hero"
import SkillOrbit from "./components/SkillOrbit";
import Timeline from "./components/Timeline";
import ProjectGrid from "./components/ProjectGrid";
//import LoadingIndicator from "./components/LoadingIndicator";

function App(){
  return (
    <main>
      <NavBar />
      <HeroSection />
      <SkillOrbit />
      <Timeline />
      <ProjectGrid />
    </main>
  );
}

export default App;