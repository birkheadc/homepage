import * as React from 'react';
import { Project } from '../../../../../types/project/project';
import ProjectCardInfo from './projectCardInfo/ProjectCardInfo';
import Spinner from '../../../../../components/spinner/Spinner';
import utils from '../../../../../utils';

type ProjectCardProps = {
  className?: string,
  project: Project | undefined
}

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
  return (
    <div className={utils.cn('rounded-md h-80 p-2', props.className)}>
      <div className='h-full rounded-md bg-gradient-to-br from-primary-300 to-primary-600'>
        {props.project ? <ProjectCardInfo project={props.project} /> : <Spinner />}
      </div>
    </div>
  );
}