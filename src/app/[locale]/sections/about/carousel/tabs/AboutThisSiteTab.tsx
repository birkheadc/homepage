import * as React from 'react';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';
import PixelatedImage from '../../../../../../components/pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../../../../types/image/imageProcessShaderMode';
import { ImageProcessShaderEffect } from '../../../../../../types/image/imageProcessShaderEffect';

type AboutThisSiteTabProps = {

}

export default function AboutThisSiteTab(props: AboutThisSiteTabProps): JSX.Element {

  const t = useRichTranslations("AboutSection.AboutThisSite");

  return (
    <div className='whitespace-pre-wrap flex flex-col gap-2 text-lg pb-6'>
      <h3 className='text-xl lg:text-2xl text-primary-0'>{t('header')}</h3>
      <p>{t('body', {
        srcCodeLink: (inner) =>
        <a className='underline text-primary-0 hocus:text-primary-2' href='https://github.com/birkheadc/homepage' target='_blank' rel='noreferrer'>{inner}</a>
      })}
      </p>
      <h3 className='text-xl lg:text-2xl text-primary-0'>{t('colorTheme.header')}</h3>
      <p>{t('colorTheme.body')}</p>
      <h3 className='text-xl lg:text-2xl text-primary-0'>{t('dithering.header')}</h3>
      <p>{t('dithering.body.1')}</p>
      <PixelatedImage className='w-64' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.LIGHT} shaderEffect={ImageProcessShaderEffect.GREYSCALE} pixelLevel={5} />
      <p>{t('dithering.body.2')}</p>
      <PixelatedImage className='w-64' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.LIGHT} shaderEffect={ImageProcessShaderEffect.BAND} pixelLevel={5} />
      <p>{t('dithering.body.3')}</p>
      <PixelatedImage className='w-64' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.LIGHT} shaderEffect={ImageProcessShaderEffect.SHADE} pixelLevel={5} />
      <p>{t('dithering.body.4')}</p>
      <PixelatedImage className='w-64' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.LIGHT} shaderEffect={ImageProcessShaderEffect.DITHER} pixelLevel={5} />
      <p>{t('dithering.body.5')}</p>
    </div>
  );
}