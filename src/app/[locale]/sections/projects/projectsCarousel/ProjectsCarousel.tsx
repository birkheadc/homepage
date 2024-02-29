'use client';

import * as React from 'react';
import { Project } from '../../../../../types/project/project';
import ProjectCard from '../../../../../components/projectCard/ProjectCard';
import Carousel from '../../../../../components/carousel/Carousel';
import api from '../../../../../api';
import { Result } from '../../../../../types/result/result';

type ProjectsCarouselProps = {

}

export default function ProjectsCarousel(props: ProjectsCarouselProps): JSX.Element {

  const [ recentResult, setRecentResult ] = React.useState<Result | undefined>();
  const [ projects, setProjects ] = React.useState<Project[] | undefined>();

  React.useEffect(() => {
    (async function fetchProjects() {
      const result = await api.projects.getAll();
      setRecentResult(result);
      if (result.wasSuccess && result.body) {
        setProjects(result.body.sort((a, b) => (b.favoriteLevel - a.favoriteLevel)))
      } else {
        console.log('failed to fetch projects, retrying...')
        await fetchProjects();
      }
    })();
  }, []);

  if (projects == null) return (
    <Carousel>
      {Array.from({ length: 3 }).map(
        (_, index) =>
        <ProjectCard key={`blank-project-card-key-${index}`} project={undefined} />
      )}
    </Carousel>
  );

  if (projects.length < 1) return (
    <div className='flex flex-col items-center'>
      <span className='text-xl lg:text-2xl text-primary-0'>oh no! colby's projects failed to load!</span>
      <span className='text-lg lg:text-xl'>{recentResult?.message}</span>
    </div>
  )

  return (
    <Carousel>
      {projects.map(
        project =>
        <ProjectCard key={`project-card-key-${project.id}`} project={project} />
      )}
    </Carousel>
  );
}