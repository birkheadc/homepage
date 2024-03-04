import * as React from 'react';
import PixelatedImage from '../../../../components/pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../../types/image/imageProcessShaderMode';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type IntroductionSectionProps = {

}

export default function IntroductionSection(props: IntroductionSectionProps): JSX.Element {

  const t = useRichTranslations('IntroductionSection')

  return (
    <div className='relative w-full min-h-[80svh]'>
      <div className='flex flex-col items-end justify-start gap-2 p-6'>
        <h2 className='text-3xl lg:text-6xl'>
          {t('header')}
        </h2>
        <p className='text-xl lg:text-2xl text-right text-balance max-w-[90%] short:max-w-[50%] lg:max-w-[50%]'>{t('body')}</p>
      </div>
      <div className='absolute bottom-0 w-full max-w-full max-h-full short:w-1/2 lg:w-1/2'>
        <PixelatedImage className='w-full h-full -translate-x-[20%] -translate-y-[10%] scale-125 lg:translate-x-0 lg:translate-y-0 lg:scale-100 short:translate-x-0 short:translate-y-0 short:scale-100' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} />
      </div>
    </div>
  );
}