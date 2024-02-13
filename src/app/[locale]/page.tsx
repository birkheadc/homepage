import * as React from 'react';
import IntroductionSection from './sections/introduction/IntroductionSection';
import Section from '../../components/section/Section';
import ProjectsSection from './sections/projects/ProjectsSection';
import ContactSection from './sections/contact/ContactSection';
import AboutSection from './sections/about/AboutSection';
import AboutMyWorkSection from './sections/aboutMyWork/AboutMyWorkSection';

export default function Home() {
  return (
    <main className='relative flex flex-col gap-8 transition-all duration-300 text-primary-1'>
      <Section>
        <IntroductionSection />
      </Section>
      <Section>
        <AboutMyWorkSection />
      </Section>
      <Section>
        <ProjectsSection />
      </Section>
      <Section>
        <AboutSection />
      </Section>
      <Section>
        <ContactSection />
      </Section>
    </main>
  );
}
