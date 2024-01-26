'use client';

import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import * as React from 'react';

interface NavBorderProps {
  children?: React.ReactNode
}

export default function NavBorder(props: NavBorderProps): JSX.Element {

  const [ offset, setOffset ] = React.useState<number>(0);

  React.useEffect(function addScrollListeners() {
    
    function calculateOffset() {
      const scrollyY = window.scrollY;
      const navHeight = document.querySelector('#primary-nav')?.clientHeight ?? 0;
      const maxY = document.documentElement.scrollHeight - navHeight;
      const offset = Math.min((scrollyY / maxY), 1);
      return offset;
    }
    
    setOffset(calculateOffset());
    const listener = () => {
      setOffset(calculateOffset());
    }
    
    window.addEventListener('scroll', listener);
    
    return (() => {
      window.removeEventListener('scroll', listener);
    })
  }, []);

  return (
    <div className='absolute flex flex-row justify-between w-full h-full rounded-3xl'>
      {props.children}
    </div>
  );
}