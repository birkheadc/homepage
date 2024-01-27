import HeroSection from "./sections/hero/HeroSection";
import ProjectsSection from "./sections/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="mt-nav">
      <HeroSection zIndex="z-0" />
      <ProjectsSection zIndex="z-10" />
    </main>
  );
}
