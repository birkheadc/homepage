'use client';

import * as React from 'react';
import Modal from './Modal';

type ModalContextData = {
  open: (contents: React.ReactNode) => void,
  close: () => void
}

const DEFAULT_DATA: ModalContextData = {
  open: function (contents: React.ReactNode): void {
    throw new Error('Function not implemented.');
  },
  close: function (): void {
    throw new Error('Function not implemented.');
  }
}

export const ModalContext = React.createContext<ModalContextData>(DEFAULT_DATA);
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {

  const [ isOpen, setOpen ] = React.useState<boolean>(false);
  const [ contents, setContents ] = React.useState<React.ReactNode | undefined>();

  const open = (contents: React.ReactNode) => {
    setContents(contents);
    setOpen(true);
  }

  const close = () => {
    setOpen(false);
  }

  return <ModalContext.Provider value={{ open, close }}>
    <Modal isOpen={isOpen} closeMe={close}>
      { contents }
    </Modal>
    { children }
  </ModalContext.Provider>
}