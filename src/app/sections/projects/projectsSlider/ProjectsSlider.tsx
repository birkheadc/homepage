import * as React from 'react';
import { Project } from '../../../../types/project/project';

type ProjectsSliderProps = {
  projects: Project[] | undefined
}

export default function ProjectsSlider(props: ProjectsSliderProps): JSX.Element {
  return (
    <div>
      ProjectsSlider
    </div>
  );
}