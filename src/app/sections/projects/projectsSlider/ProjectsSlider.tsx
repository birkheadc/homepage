'use client';

import * as React from 'react';
import { Project } from '../../../../types/project/project';
import ProjectCard from './projectCard/ProjectCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import api from '../../../../api';

type ProjectsSliderProps = {

}

export default function ProjectsSlider(props: ProjectsSliderProps): JSX.Element {


  const [ projects, setProjects ] = React.useState<Project[] | undefined>();
  const [ current, setCurrent ] = React.useState<number>(0);

  React.useEffect(() => {
    (async function fetchProjects() {
      const result = await api.projects.getAll();
      if (result.wasSuccess && result.body) {
        setProjects(result.body.sort((a, b) => b.favoriteLevel - a.favoriteLevel));
      }
    })();
  }, []);

  const NUM_SKELETON_CARDS = 3;
  const numCards = projects ? projects.length : NUM_SKELETON_CARDS;

  const currentCardClassName = 'w-96 scale-110 transition-all duration-500 ease-bounce';
  const nonCurrentCardClassName = 'w-96 scale-90 transition-all duration-100';

  const prev = () => {
    setCurrent(c => Math.max(0, c - 1));
  }

  const next = () => {
    setCurrent(c => Math.min(numCards - 1, c + 1));
  }

  return (
    <div className='flex flex-row items-center justify-center w-full gap-2 m-auto lg:w-4/6'>
      <button className='transition-opacity disabled:opacity-25' disabled={current <= 0} type='button' onClick={prev}><ChevronLeftIcon width={'2rem'} /></button>
      <div className='relative flex items-center justify-center flex-grow w-full overflow-hidden h-96'>
        <div className='flex items-center justify-start w-96'>
          <div className='flex flex-row transition-all duration-300' style={{ translate: `${-100 * (current / numCards) }%` }}>
            { projects ? projects.map((project, index) => <ProjectCard className={ index === current ? currentCardClassName : nonCurrentCardClassName} key={`project-card-key-${project.id}`} project={project} />) : Array.from({ length: NUM_SKELETON_CARDS }).map((_, index) => <ProjectCard className={ index === current ? currentCardClassName : nonCurrentCardClassName} key={`project-card-key-${index}`} project={undefined} />) }
          </div>
        </div>
      </div>
      <button className='transition-opacity disabled:opacity-25' disabled={current >= numCards - 1} type='button' onClick={next}><ChevronRightIcon width={'2rem'} /></button>
    </div>
  );
}