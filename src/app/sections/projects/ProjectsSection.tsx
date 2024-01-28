import * as React from 'react';
import ProjectsSlider from './projectsSlider/ProjectsSlider';

type ProjectsSectionProps = {

}

export default function ProjectsSection(props: ProjectsSectionProps): JSX.Element {
  return (
    <div className='flex flex-col items-start w-full p-6 m-auto'>
      <h1 className='text-4xl font-bold lg:text-7xl'>what kinds of stuff?</h1>
      <span className='text-3xl lg:text-4xl'>i'm glad you asked</span>
      <ProjectsSlider />
    </div>
  );
}