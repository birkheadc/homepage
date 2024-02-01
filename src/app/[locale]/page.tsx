import * as React from 'react';
import IntroductionSection from './sections/introduction/IntroductionSection';
import Section from '../../components/section/Section';
import ProjectsSection from './sections/projects/ProjectsSection';

export default function Home() {
  return (
    <main className='relative flex flex-col gap-8 transition-all duration-300 text-primary-1'>
      <Section>
        <IntroductionSection />
      </Section>
      <Section>
        <ProjectsSection />
      </Section>
      <Section>
        <h2>section 3</h2>
      </Section>
      <Section>
        <h2>section 4</h2>
      </Section>
      <Section>
        <h2>section 5</h2>
      </Section>
    </main>
  );
}
