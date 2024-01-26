import * as React from 'react';
import LandingPageSection from '../../../components/landingPageSection/LandingPageSection';
import ColbyPortrait from './portrait/ColbyPortrait';

interface HeroSectionProps {

}

export default function HeroSection(props: HeroSectionProps): JSX.Element {
  return (
    <LandingPageSection id='hero' className='relative bg-primary-700 text-primary-300 bg-gradient-to-br from-primary-700 to-primary-400'>
      <ColbyPortrait />
      <div className='flex flex-col items-end justify-center p-10 h-4/6 w-fit lg:justify-center'>
        <h1 className='text-5xl font-bold lg:text-8xl'>this is colby</h1>
        <span className='text-3xl lg:text-5xl'>he builds stuff</span>
        <span className='text-xl lg:text-2xl'>internet stuff</span>
      </div>
      
    </LandingPageSection>
  );
}