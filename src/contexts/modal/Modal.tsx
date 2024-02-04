import * as React from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean,
  closeMe: () => void,
  children?: React.ReactNode
}

export default function Modal(props: ModalProps): JSX.Element {

  const { isOpen, closeMe, children } = props;

  return (
    <ReactModal onRequestClose={closeMe} isOpen={isOpen} shouldCloseOnEsc shouldCloseOnOverlayClick >
      { children }
      also need a close button somewhere
      also need to style the overlay
      also need to style this modal, but that should be simple
    </ReactModal>
  );
}