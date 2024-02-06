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
      <div className='flex flex-col items-end justify-start gap-2 p-6'>
        <h2 className='text-5xl lg:text-7xl'>
          {t.rich('header', {
            em: (inner) =>
            <span className='text-primary-0 '>{inner}</span>
          })}
        </h2>
        <p className='text-lg lg:text-xl max-w-[90%] lg:max-w-[50%]'>{t('body')}</p>
      </div>
      <PixelatedImage className='absolute bottom-0 max-w-full max-h-full ' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} />
    </div>
  );
}