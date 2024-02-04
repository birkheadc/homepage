import { Project } from '@/types/project/project';
import * as React from 'react';

interface ProjectMoreInfoCardProps {
  project: Project
}

export default function ProjectMoreInfoCard(props: ProjectMoreInfoCardProps): JSX.Element {

  const { project } = props;

  return (
    <div>
      more info about { project.title }
    </div>
  );
}