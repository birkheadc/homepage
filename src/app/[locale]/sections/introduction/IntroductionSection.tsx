import * as React from 'react';
import PixelatedImage from '../../../../components/pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../../types/image/imageProcessShaderMode';

type IntroductionSectionProps = {

}

export default function IntroductionSection(props: IntroductionSectionProps): JSX.Element {
  return (
    <div className='relative w-full h-full'>
      <h2>hi! i'm colby!</h2>
      <PixelatedImage className='absolute bottom-0 max-w-full max-h-full ' img={'/colby/400.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} />
    </div>
  );
}