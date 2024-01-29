'use client';

import * as React from 'react';

type FrameContextData = {
  zoomOut: () => void,
  zoomIn: () => void,
  isZoomedIn: boolean
}

const DEFAULT_DATA: FrameContextData = {
  zoomOut: function (): void {
    throw new Error('Function not implemented.');
  },
  zoomIn: function (): void {
    throw new Error('Function not implemented.');
  },
  isZoomedIn: false
}

export const FrameContext = React.createContext<FrameContextData>(DEFAULT_DATA);
export const FrameProvider = ({ children } : { children: React.ReactNode }) => {
  const [ isZoomedIn, setZoomedIn ] = React.useState<boolean>(false);

  const zoomOut = () => {
    setZoomedIn(false);
  }

  const zoomIn = () => {
    setZoomedIn(true);
  }

  return <FrameContext.Provider value = {{ zoomOut, zoomIn, isZoomedIn }} >
    { children }
  </FrameContext.Provider>
}