import * as React from 'react';
import LandingPageSection from '../../../components/landingPageSection/LandingPageSection';
import ColbyPortrait from './portrait/ColbyPortrait';
import utils from '../../../utils';

interface HeroSectionProps {
  zIndex: string
}

export default function HeroSection(props: HeroSectionProps): JSX.Element {
  return (
    <LandingPageSection id='hero' className={utils.cn(props.zIndex, 'bg-primary-700 text-primary-300 bg-gradient-to-br from-primary-700 to-primary-400')}>
      <div>
        <ColbyPortrait />
        <div className='flex flex-col items-end justify-center p-10 h-4/6 w-full'>
          <h1 className='text-5xl font-bold lg:text-8xl'>this is <span className='text-primary-50'>colby</span></h1>
          <span className='text-3xl lg:text-5xl'>he builds stuff</span>
          <span className='text-xl lg:text-2xl'>on the <span className='text-primary-100'>internet</span> of all places</span>
        </div>
      </div>
      
    </LandingPageSection>
  );
}