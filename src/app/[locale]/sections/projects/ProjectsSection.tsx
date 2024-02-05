import * as React from 'react';
import ProjectsCarousel from './projectsCarousel/ProjectsCarousel';
import { useTranslations } from 'next-intl';

type ProjectsSectionProps = {

}

export default function ProjectsSection(props: ProjectsSectionProps): JSX.Element {

  const t = useTranslations('ProjectsSection');

  return (
    <div className='flex flex-col items-center justify-center w-full h-full short:flex-row'>
      <div className='flex flex-col justify-start w-full gap-2 p-6'>
        <h2 className='text-4xl lg:text-7xl'>{t('header')}</h2>
        <span className='text-3xl lg:text-5xl text-primary-0'>{t('span-1')}</span>
        <span className='text-2xl lg:text-4xl'>{t('span-2')}</span>
      </div>
      <div className='flex items-center justify-center w-[100%] lg:w-[600px] short:w-full h-full'>
        <ProjectsCarousel />
      </div>
    </div>
  );
}