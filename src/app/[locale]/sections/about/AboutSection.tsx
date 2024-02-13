import { useTranslations } from 'next-intl';
import * as React from 'react';
import AboutCarousel from './carousel/AboutCarousel';

interface AboutSectionProps {

}

export default function AboutSection(props: AboutSectionProps): JSX.Element {
  const t = useTranslations('AboutSection');

  return (
    <div className='relative w-full h-full p-4 flex flex-col'>
      <h2 className='text-3xl lg:text-7xl'>
        {t.rich('header', {
          em: inner => <span className='text-primary-0'>{inner}</span>
        })}
      </h2>
      <AboutCarousel />
    </div>
  );
}