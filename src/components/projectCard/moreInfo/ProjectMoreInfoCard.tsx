import { Project } from '@/types/project/project';
import * as React from 'react';
import ProjectTechnologiesList from '../body/info/technologies/ProjectTechnologiesList';
import useLanguage from '@/hooks/language/useLanguage';
import ProjectCardLinks from '../body/info/links/ProjectCardLinks';

interface ProjectMoreInfoCardProps {
  project: Project
}

export default function ProjectMoreInfoCard(props: ProjectMoreInfoCardProps): JSX.Element {

  const { project } = props;
  const language = useLanguage();

  return (
    <div className='flex flex-col items-center justify-start w-fit h-fit max-w-[600px] max-h-[90svh] m-auto bg-primary-3 text-primary-1 border-2 overflow-y-scroll'>
      <div className='flex flex-col items-center justify-start w-full'>
        <span className='w-full p-2 text-3xl text-center bg-primary-2 lg:text-5xl'>{project.title}</span>
        <ProjectTechnologiesList technologies={project.technologies} />
      </div>
      <div className='flex flex-col flex-grow w-full gap-1 p-1 bg-primary-2'>
        <p className='w-full p-2 text-xl whitespace-pre-wrap bg-primary-3 lg:text-2xl'>{project.descriptions.shortDescriptions.find(d => d.language === language)?.content}</p>
        <p className='flex-grow w-full p-2 text-xl whitespace-pre-wrap bg-primary-3 lg:text-2xl'>{project.descriptions.longDescriptions.find(d => d.language === language)?.content}</p>
      </div>
      <ProjectCardLinks project={project} />
    </div>
  );
}