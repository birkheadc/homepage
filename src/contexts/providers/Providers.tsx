'use client';

import * as React from 'react';
import { FrameProvider } from '../frame/FrameContext';
import { ModalProvider } from '../modal/ModalContext';

interface ProvidersProps {
  children?: React.ReactNode
}

export default function Providers(props: ProvidersProps): JSX.Element {
  return (
    <ModalProvider>
      <FrameProvider>
        { props.children }
      </FrameProvider>
    </ModalProvider>
  );
}