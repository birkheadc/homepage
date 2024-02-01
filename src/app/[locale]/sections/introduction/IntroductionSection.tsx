import * as React from 'react';
import PixelatedImage from '../../../../components/pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../../types/image/imageProcessShaderMode';
import { useTranslations } from 'next-intl';

type IntroductionSectionProps = {

}

export default function IntroductionSection(props: IntroductionSectionProps): JSX.Element {

  const t = useTranslations('IntroductionSection')

  return (
    <div className='relative w-full h-full'>
      <div className='flex flex-col items-end justify-start p-2'>
        <h2 className='text-5xl lg:text-7xl'>{t('header.thisIs')} <span className='text-primary-0'>{t('header.colby')}</span></h2>
        <span className='text-2xl lg:text-4xl'>{t('span-1')}</span>
        <span className='text-lg lg:text-2xl'>{t('span-2.onThe')} <span className='text-primary-0'>{t('span-2.internet')}</span> {t('span-2.ofAllThings')}</span>
      </div>
      <PixelatedImage className='absolute bottom-0 max-w-full max-h-full ' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} />
    </div>
  );
}