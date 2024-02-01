import * as React from 'react';
import Carousel from '../../../../components/carousel/Carousel';
import ProjectCard from '../../../../components/projectCard/ProjectCard';
import ProjectsCarousel from './projectsCarousel/ProjectsCarousel';

type ProjectsSectionProps = {

}

export default function ProjectsSection(props: ProjectsSectionProps): JSX.Element {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row'>
      <div className='flex flex-col justify-start p-6'>
        <h2 className='text-5xl lg:text-7xl'>what kinds of things?</h2>
        <span className='text-xl lg:text-3xl'>thank you for asking!</span>
        <span className='text-2xl lg:text-4xl'>here's a few of the things colby is working on</span>
      </div>
      <div>
        <ProjectsCarousel />
      </div>
    </div>
  );
}