'use client';

import ProjectMoreInfoCard from '@/components/projectCard/moreInfo/ProjectMoreInfoCard';
import { ModalContext } from '@/contexts/modal/ModalContext';
import { Project } from '@/types/project/project';
import * as React from 'react';

interface ReadMoreButtonProps {
  project: Project
}

export default function ReadMoreButton(props: ReadMoreButtonProps): JSX.Element {

  const { open } = React.useContext(ModalContext);

  const handleReadMore = () => {
    open(<ProjectMoreInfoCard project={props.project} />);
  }

  return (
    <button className='underline hocus:text-primary-0' onClick={handleReadMore} type='button'>read more</button>
  );
}