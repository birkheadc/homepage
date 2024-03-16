'use client';

import * as React from 'react';

export default function useScreenSize(): { width: number, height: number } {
  const [size, setSize] = React.useState<{ width: number, height: number}>({ width: 0, height: 0 });

  React.useEffect(function setListenerOnMount() {
    const listener = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', listener);
    listener();
    return (() => {
      window.removeEventListener('resize', listener);
    })
  }, []);

  return size;
}