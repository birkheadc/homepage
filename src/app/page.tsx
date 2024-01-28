import LandingPageSection from "../components/landingPageSection/LandingPageSection";
import HeroSection from "./sections/hero/HeroSection";
import ProjectsSection from "./sections/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="mt-nav">
      <LandingPageSection id='hero' className='z-0 bg-primary-700 text-primary-300 bg-gradient-to-br from-primary-700 to-primary-400'>
        <HeroSection />
      </LandingPageSection>
      <LandingPageSection isLast id={'projects'} className='z-10 bg-primary-300 text-primary-800'>
        <ProjectsSection />
      </LandingPageSection>
    </main>
  );
}
