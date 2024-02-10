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

  let root: HTMLElement | undefined = undefined;
  if (typeof window !== 'undefined') {
    root = document.querySelector('#root') as HTMLElement ?? undefined
  }

  return (
    <ReactModal appElement={root} closeTimeoutMS={300} style={modalStyle} onRequestClose={closeMe} isOpen={isOpen} shouldCloseOnEsc shouldCloseOnOverlayClick >
      { children }
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
    padding: 0,
    boxShadow: '5px 5px 10px hsl(var(--twc-primary-0))',
    maxWidth: '90%',
    maxHeight: '90%'
  }
}