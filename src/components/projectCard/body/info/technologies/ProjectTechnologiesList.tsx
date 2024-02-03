import * as React from 'react';
import utils from '../../../../../utils';

type ProjectTechnologiesListProps = {
  technologies: string[],
  className?: string
}

export default function ProjectTechnologiesList(props: ProjectTechnologiesListProps): JSX.Element {

  const { technologies } = props;

  return (
    <div className={utils.cn('w-full', props.className)}>
      <div className='flex flex-row flex-wrap justify-around w-full gap-1 p-1 bg-primary-2'>
        { technologies.map(
          (technology, index) =>
          <span className='flex-grow px-1 text-center text-primary-2 bg-primary-3 whitespace-nowrap' key={`technology-list-item-key-${technology}-${index}`} style={{ animationDelay: `${200 + (75 * index)}ms` }}>{technology}</span>
        )}
      </div>
    </div>
  );
}