import * as React from 'react';
import LocationMarker from './locationMarker/LocationMarker';
import NavLinks from './navLinks/NavLinks';
import NavBorder from './navBorder/NavBorder';

interface PrimaryNavProps {

}

export default function PrimaryNav(props: PrimaryNavProps): JSX.Element {
  return (
    <nav id='primary-nav' className='fixed top-0 z-10 flex flex-col justify-center w-full bg-primary-900 text-primary-50 h-nav'>
      <div className='relative w-full h-full lg:w-3/6'>
        <NavBorder>
          <LocationMarker />
          <NavLinks />
        </NavBorder>
      </div>
    </nav>
  );
}