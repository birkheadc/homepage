'use client';

import * as React from 'react';
import { FrameProvider } from '../frame/FrameContext';

interface ProvidersProps {
  children?: React.ReactNode
}

export default function Providers(props: ProvidersProps): JSX.Element {
  return (
    <FrameProvider>
      { props.children }
    </FrameProvider>
  );
}