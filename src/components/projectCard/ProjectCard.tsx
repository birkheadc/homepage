import * as React from 'react';
import { Project } from '../../types/project/project';
import Spinner from '../spinner/Spinner';
import ProjectCardBody from './body/ProjectCardBody';

type ProjectCardProps = {
  project: Project | undefined,
}

export default function ProjectCard(props: ProjectCardProps): JSX.Element {

  const { project } = props;

  if (project == null) return (
    <div className='w-full h-full border-2'>
      <Spinner />
    </div>
  )
  
  return (
    <div className='relative flex flex-col w-full h-full border-2 '>
      <h3 className='w-full text-xl text-center bg-primary-1 text-primary-3 lg:text-3xl'>{project.title}</h3>
      <ProjectCardBody project={project} />
    </div>
  );
}