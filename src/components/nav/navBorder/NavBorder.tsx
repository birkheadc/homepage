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
      <svg className='absolute z-30 w-full h-full stroke-secondary-400' id="one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30">
        <path id="chain_st" stroke-width="1" fill="transparent" stroke-dasharray="2.6 2.45" d="M21.3 13.5 H20 C11.4 13.5 11.4 26.5 20 26.5 H80 C89 26.5 89 13.5 80.8 13.5z" />
      </svg>
      <div className='z-20 h-full text-primary-700' style={{ rotate: `${offset * 360}deg` }}>
        <Cog6ToothIcon height={'100%'} />
      </div>
      <div className='relative w-full h-full'>{ props.children }</div>
      <div className='z-20 h-full text-primary-700' style={{ rotate: `${offset * 360}deg` }}>
        <Cog6ToothIcon height={'100%'} />
      </div>
    </div>
  );
}