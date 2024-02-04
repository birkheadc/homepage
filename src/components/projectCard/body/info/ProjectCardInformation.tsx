import * as React from 'react';
import { Project } from '../../../../types/project/project';
import useLanguage from '../../../../hooks/language/useLanguage';
import ProjectTechnologiesList from './technologies/ProjectTechnologiesList';
import styles from './ProjectCardInformation.module.css';
import utils from '../../../../utils';
import ReadMoreButton from './readMoreButton/ReadMoreButton';

type ProjectCardInformationProps = {
  project: Project
}

export default function ProjectCardInformation(props: ProjectCardInformationProps): JSX.Element {

  const { project } = props;
  const language = useLanguage();

  const handleReadMore = () => {
    alert('sorry, not yet implemented :(');
  }

  return (
    <div className={utils.cn('absolute inset-0 z-10 flex flex-col items-center justify-between transition-all bg-opacity-75 opacity-0 hover:opacity-100 backdrop-blur-sm bg-primary-3', styles.information)}>
      <ProjectTechnologiesList className={styles.technologies} technologies={project.technologies} />
      <span className={utils.cn('flex-grow px-2 border-l-4 border-r-4 border-primary-2 lg:text-lg', styles.text)}>{project.descriptions.shortDescriptions.find(d => d.language === language)?.content}</span>
      <div className={utils.cn('flex flex-row justify-around items-center w-full bg-primary-2 text-primary-3', styles.links)}>
        <ReadMoreButton project={project} />
        <a className='underline hover:text-primary-0' href={project.source} target='_blank' rel='noopener noreferrer'>src code</a>
        <a className='underline hover:text-primary-0' href={project.site} target='_blank' rel='noopener noreferrer'>visit site</a>
      </div>
    </div>
  );
}