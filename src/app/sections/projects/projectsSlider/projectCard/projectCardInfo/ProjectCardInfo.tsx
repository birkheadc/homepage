import * as React from 'react';
import { Project } from '../../../../../../types/project/project';

type ProjectCardInfoProps = {
  project: Project
}

export default function ProjectCardInfo(props: ProjectCardInfoProps): JSX.Element {

  const project = props.project;

  return (
    <div className='flex flex-col items-center justify-between p-2'>
      <span className='text-xl font-bold'>{project.title}</span>
      <img src={project.imageUrls[0]}></img>
    </div>
  );
}