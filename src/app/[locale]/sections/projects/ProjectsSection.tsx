import * as React from 'react';
import ProjectsCarousel from './projectsCarousel/ProjectsCarousel';
import useRichTranslations from '../../../../hooks/richTranslations/useRichTranslations';

type ProjectsSectionProps = {

}

export default function ProjectsSection(props: ProjectsSectionProps): JSX.Element {

  const t = useRichTranslations('ProjectsSection');

  return (
    <div className='flex flex-col items-center justify-center w-full h-[80svh] short:items-stretch short:flex-row' id='projects-section'>
      <div className='flex flex-col justify-start w-full gap-2 p-6'>
        <h2 className='text-4xl text-center lg:text-6xl'>
          {t('header')}
        </h2>
      </div>
      <div className='flex items-center justify-center w-[100%] lg:w-[600px] short:w-full h-full'>
        <ProjectsCarousel />
      </div>
    </div>
  );
}