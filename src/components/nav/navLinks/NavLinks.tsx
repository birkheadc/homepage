import * as React from 'react';
import NavLink from './navLink/NavLink';
import { BeakerIcon, HomeIcon } from '@heroicons/react/24/outline';

type NavLinksProps = {

}

export default function NavLinks(props: NavLinksProps): JSX.Element {
  return (
    <ul className='absolute flex flex-row w-full h-full'>
      <NavLink id='hero'><HomeIcon className='h-6' height={'100%'}/> <span className='hidden lg:inline-block'>top</span></NavLink>
      <NavLink id='projects'><BeakerIcon className='h-6' height={'100%'}/> <span className='hidden lg:inline-block'>projects</span></NavLink>
    </ul>
  );
}