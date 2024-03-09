import { XCircleIcon } from '@heroicons/react/24/outline';
import * as React from 'react';

type ModalCloseButtonProps = {
  onClick: () => void
}

export default function ModalCloseButton(props: ModalCloseButtonProps): JSX.Element {

  const { onClick } = props;

  return (
    <div className='absolute top-0 left-0 p-2'><button className='text-primary-1 hocus:text-primary-0 rounded-full' onClick={onClick}><XCircleIcon width={'2rem'}/><span className='hidden'>close</span></button></div>
  );
}