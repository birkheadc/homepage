import * as React from 'react';
import { Project } from '../../../../types/project/project';
import useLanguage from '../../../../hooks/language/useLanguage';
import ProjectTechnologiesList from './technologies/ProjectTechnologiesList';
import styles from './ProjectCardInformation.module.css';
import utils from '../../../../utils';
import ProjectCardLinks from './links/ProjectCardLinks';

type ProjectCardInformationProps = {
  project: Project
}

export default function ProjectCardInformation(props: ProjectCardInformationProps): JSX.Element {

  const { project } = props;
  const {language} = useLanguage();

  const handleReadMore = () => {
    alert('sorry, not yet implemented :(');
  }

  return (
    <div className={utils.cn('absolute inset-0 z-10 flex flex-col items-center justify-between transition-all bg-opacity-75 opacity-0 hocus-within:opacity-100 backdrop-blur-sm bg-primary-3', styles.information)}>
      <ProjectTechnologiesList className={styles.technologies} technologies={project.technologies} />
      <div className='flex-grow px-2 border-l-4 border-r-4 border-b-4 border-primary-2'>
        <p className={utils.cn('lg:text-lg whitespace-pre-wrap text-pretty', styles.text)}>{project.descriptions.shortDescriptions.find(d => d.language === language)?.content}</p>
      </div>
      <ProjectCardLinks project={project} styles={styles} showReadMore />
    </div>
  );
}