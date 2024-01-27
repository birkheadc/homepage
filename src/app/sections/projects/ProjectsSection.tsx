import * as React from 'react';
import LandingPageSection from '../../../components/landingPageSection/LandingPageSection';
import utils from '../../../utils';
import ProjectsSlider from './projectsSlider/ProjectsSlider';

type ProjectsSectionProps = {
  zIndex: string
}

export default function ProjectsSection(props: ProjectsSectionProps): JSX.Element {
  return (
    <LandingPageSection id={'projects'} className={utils.cn(props.zIndex, 'bg-primary-300 text-primary-800')}>
      <div className='flex flex-col items-start w-fit m-auto p-6'>
        <h1 className='text-4xl font-bold lg:text-7xl'>what kinds of stuff?</h1>
        <span className='text-3xl lg:text-4xl'>i'm glad you asked</span>
        <ProjectsSlider projects={undefined} />
      </div>
    </LandingPageSection>
  );
}