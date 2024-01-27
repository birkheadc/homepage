import * as React from 'react';
import { Project } from '../../../../../types/project/project';

type ProjectCardProps = {
  project: Project | undefined
}

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
  return (
    <div>
      ProjectCard
    </div>
  );
}