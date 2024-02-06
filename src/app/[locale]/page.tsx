import * as React from 'react';
import IntroductionSection from './sections/introduction/IntroductionSection';
import Section from '../../components/section/Section';
import ProjectsSection from './sections/projects/ProjectsSection';
import AboutMyWorkSection from './sections/aboutMyWork/AboutMyWorkSection';
import AboutThisSiteSection from './sections/aboutThisSite/AboutThisSiteSection';
import ContactSection from './sections/contact/ContactSection';

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
        <AboutThisSiteSection />
      </Section>
      <Section>
        <ContactSection />
      </Section>
    </main>
  );
}
