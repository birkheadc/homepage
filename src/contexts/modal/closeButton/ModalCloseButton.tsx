import { XCircleIcon } from '@heroicons/react/24/outline';
import * as React from 'react';

type ModalCloseButtonProps = {
  onClick: () => void
}

export default function ModalCloseButton(props: ModalCloseButtonProps): JSX.Element {

  const { onClick } = props;

  return (
    <button className='fixed top-0 right-0 text-primary-3 hover:text-primary-0' onClick={onClick}><XCircleIcon width={'2rem'}/></button>
  );
}