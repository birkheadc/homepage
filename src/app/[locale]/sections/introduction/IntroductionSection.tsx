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
      <div className='flex flex-col items-end gap-2 justify-start p-6'>
        <h2 className='text-5xl lg:text-7xl'>
          {t.rich('header', {
            em: (inner) => {
              return <span className='text-primary-0'>{inner}</span>
            }
          })}
        </h2>
        <span className='text-2xl lg:text-4xl'>
          {t('span-1')}
        </span>
        <span className='text-lg lg:text-2xl'>
          {t.rich('span-2', {
            em: (inner) => {
              return <span className='text-primary-0'>{inner}</span>
            }
          })}
        </span>
      </div>
      <PixelatedImage className='absolute bottom-0 max-w-full max-h-full ' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} />
    </div>
  );
}