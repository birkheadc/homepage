'use client';

import { XCircleIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import ReactModal from 'react-modal';
import ModalCloseButton from './closeButton/ModalCloseButton';

interface ModalProps {
  isOpen: boolean,
  closeMe: () => void,
  children?: React.ReactNode
}

export default function Modal(props: ModalProps): JSX.Element {

  const { isOpen, closeMe, children } = props;

  return (
    <ReactModal appElement={document.querySelector('#root') as HTMLElement ?? undefined} closeTimeoutMS={300} style={modalStyle} onRequestClose={closeMe} isOpen={isOpen} shouldCloseOnEsc shouldCloseOnOverlayClick >
      <div className='overflow-auto'>{ children }</div>
      <ModalCloseButton onClick={closeMe} />
    </ReactModal>
  );
}

const modalStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    position: 'fixed',
    inset: 'unset',
    borderRadius: '0',
    border: 'none',
    width: 'fit-content',
    maxWidth: '90lvw',
    height: 'fit-content',
    maxHeight: '90svh',
    padding: 0,
    boxShadow: '5px 5px 10px hsl(var(--twc-primary-0))',
  }
}