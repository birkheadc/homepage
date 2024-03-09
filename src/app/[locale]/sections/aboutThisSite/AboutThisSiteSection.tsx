import * as React from 'react';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';
import PixelatedImage from '../../../../components/pixelatedImage/PixelatedImage';
import { ImageProcessShaderEffect } from '../../../../types/image/imageProcessShaderEffect';
import { ImageProcessShaderMode } from '../../../../types/image/imageProcessShaderMode';

type AboutThisSiteSectionProps = {

}

export default function AboutThisSiteSection(props: AboutThisSiteSectionProps): JSX.Element {

  const t = useRichTranslations("AboutSection.AboutThisSite");

  return (
    <div className='flex flex-col gap-4 p-6 text-lg lg:text-xl'>
      <h2 className='text-4xl lg:text-6xl text-primary-0'>{t('header')}</h2>
      <p>{t('body', {
        srcCodeLink: (inner) =>
        <a className='underline text-primary-0 hocus:text-primary-2' href='https://github.com/birkheadc/homepage' target='_blank' rel='noreferrer'>{inner}</a>
      })}
      </p>
      <h3 className='text-2xl lg:text-3xl text-primary-0'>{t('colorTheme.header')}</h3>
      <p>{t('colorTheme.body')}</p>
      <h3 className='text-2xl lg:text-3xl text-primary-0'>{t('dithering.header')}</h3>
      <p>{t('dithering.body.1')}</p>
      <div className='flex flex-col items-center max-w-2xl gap-4 py-8 m-auto'>
        <p>{t('dithering.body.2')}</p>
        <PixelatedImage ariaLabel='slightly blurry, greyscale image of Colby' className='w-64' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.LIGHT} shaderEffect={ImageProcessShaderEffect.GREYSCALE} pixelLevel={5} />
        <p>{t('dithering.body.3')}</p>
        <PixelatedImage ariaLabel='pixelated image of the previous image' className='w-64' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.LIGHT} shaderEffect={ImageProcessShaderEffect.BAND} pixelLevel={5} />
        <p>{t('dithering.body.4')}</p>
        <PixelatedImage ariaLabel='colored version of the previous image' className='w-64' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.LIGHT} shaderEffect={ImageProcessShaderEffect.SHADE} pixelLevel={5} />
        <p>{t('dithering.body.5')}</p>
        <PixelatedImage ariaLabel='pixelated, colored, and dithered image of Colby' className='w-64' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.LIGHT} shaderEffect={ImageProcessShaderEffect.DITHER} pixelLevel={5} />
        <p>{t('dithering.body.6')}</p>
      </div>
    </div>
  );
}