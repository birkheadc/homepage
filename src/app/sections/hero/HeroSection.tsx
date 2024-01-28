import * as React from 'react';
import LandingPageSection from '../../../components/landingPageSection/LandingPageSection';
import ColbyPortrait from './portrait/ColbyPortrait';
import utils from '../../../utils';

interface HeroSectionProps {
  
}

export default function HeroSection(props: HeroSectionProps): JSX.Element {
  return (
    <div>
      <ColbyPortrait />
      <div className='flex flex-col items-end justify-center w-full p-10 h-4/6'>
        <h1 className='text-5xl font-bold lg:text-8xl'>this is <span className='text-primary-50'>colby</span></h1>
        <span className='text-3xl lg:text-5xl'>he builds stuff</span>
        <span className='text-xl lg:text-2xl'>on the <span className='text-primary-100'>internet</span> of all places</span>
      </div>
    </div>
  );
}