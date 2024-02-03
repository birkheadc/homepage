import * as React from 'react';
import ProjectsCarousel from './projectsCarousel/ProjectsCarousel';

type ProjectsSectionProps = {

}

export default function ProjectsSection(props: ProjectsSectionProps): JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full short:flex-row'>
      <div className='flex flex-col justify-start w-full p-6'>
        <h2 className='text-4xl lg:text-7xl'>what kinds of things?</h2>
        <span className='text-3xl lg:text-5xl text-primary-0'>thank you for asking!</span>
        <span className='text-2xl lg:text-4xl'>here's a few of the things colby is working on</span>
      </div>
      <div className='flex items-center justify-center w-[100%] lg:w-[600px] short:w-full h-full'>
        <ProjectsCarousel />
      </div>
    </div>
  );
}