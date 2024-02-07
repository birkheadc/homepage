import { useTranslations } from 'next-intl';
import * as React from 'react';
import AboutThisSiteCarousel from './carousel/AboutThisSiteCarousel';

interface AboutThisSiteSectionProps {

}

export default function AboutThisSiteSection(props: AboutThisSiteSectionProps): JSX.Element {

  const t = useTranslations('AboutThisSiteSection');

  return (
    <div className='relative w-full h-full p-4 flex flex-col'>
      <h2 className='text-3xl lg:text-7xl'>
        {t.rich('header', {
          em: inner => <span className='text-primary-0'>{inner}</span>
        })}
      </h2>
      <AboutThisSiteCarousel />
    </div>
  );
}