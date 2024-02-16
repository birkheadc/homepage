import * as React from 'react';
import AboutCarousel from './carousel/AboutCarousel';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

interface AboutSectionProps {

}

export default function AboutSection(props: AboutSectionProps): JSX.Element {
  const t = useRichTranslations('AboutSection');

  return (
    <div className='relative w-full h-[80svh] p-4 gap-4 flex flex-col short:flex-row'>
      <h2 className='text-3xl lg:text-5xl text-balance text-center short:w-[35%]'>
        {t('header')}
      </h2>
      <AboutCarousel />
    </div>
  );
}