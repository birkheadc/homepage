import * as React from 'react';
import ProjectsCarousel from './projectsCarousel/ProjectsCarousel';

type ProjectsSectionProps = {

}

export default function ProjectsSection(props: ProjectsSectionProps): JSX.Element {
  return (
    <div className='flex flex-col short:flex-row justify-center items-center w-full h-full'>
      <div className='flex flex-col justify-start p-6 w-full'>
        <h2 className='text-4xl lg:text-7xl'>what kinds of things?</h2>
        <span className='text-3xl lg:text-5xl text-primary-0'>thank you for asking!</span>
        <span className='text-2xl lg:text-4xl'>here's a few of the things colby is working on</span>
      </div>
      <div className='flex items-center justify-center flex-grow w-[max(20rem,50%)] short:w-full h-full'>
        <ProjectsCarousel />
      </div>
    </div>
  );
}