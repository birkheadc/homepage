'use client';

import * as React from 'react';
import { Project } from '../../../types/project/project';
import ProjectCardInformation from './info/ProjectCardInformation';
import ProjectCardImageDisplay from './imageDisplay/ProjectCardImageDisplay';

type ProjectCardBodyProps = {
  project: Project,
}

export default function ProjectCardBody(props: ProjectCardBodyProps): JSX.Element {

  const { project } = props;
  
  return (
    <div className='relative w-full h-full p-1 bg-primary-2'>
      <ProjectCardImageDisplay images={project.imageUrls} />
      <ProjectCardInformation project={project} />
    </div>
  );
}