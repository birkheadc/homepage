import { Project } from '@/types/project/project';
import utils from '@/utils';
import * as React from 'react';
import ReadMoreButton from '../readMoreButton/ReadMoreButton';

interface ProjectCardLinksProps {
  project: Project,
  styles?: { [key: string]: string },
  showReadMore?: boolean
}

export default function ProjectCardLinks(props: ProjectCardLinksProps): JSX.Element {

  const { project, styles, showReadMore } = props;

  return (
    <div className={utils.cn(`flex flex-row justify-around items-center w-full bg-primary-2 text-primary-3 ${showReadMore ? 'h-0 text-sm' : 'h-fit p-2'}`, styles?.links)}>
      { showReadMore && <ReadMoreButton project={project} />}
      <a className='underline hocus:text-primary-0' href={project.source} target='_blank' rel='noopener noreferrer'>src code</a>
      <a className='underline hocus:text-primary-0' href={project.site} target='_blank' rel='noopener noreferrer'>visit site</a>
    </div>
  );
}