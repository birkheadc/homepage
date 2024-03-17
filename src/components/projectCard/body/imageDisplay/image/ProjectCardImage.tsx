import * as React from 'react';
import PixelatedImage from '../../../../pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../../../types/image/imageProcessShaderMode';
import utils from '../../../../../utils';
import styles from './ProjectCardImage.module.css';
import Spinner from '../../../../spinner/Spinner';

type ProjectCardImageProps = {
  outerDivSize: { width?: number, height?: number },
  image: string,
  isCurrent: boolean
}

export default function ProjectCardImage(props: ProjectCardImageProps): JSX.Element {

  const { outerDivSize, image, isCurrent } = props;
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log('create card image...');
  }, []);

  const handleReady = (canvas: HTMLCanvasElement) => {

    console.log({ image, width: canvas.getBoundingClientRect().width, height: canvas.getBoundingClientRect().height });
    
    if (wrapperRef.current == null) {
      console.log('uh oh wrapper ref is null');
      return;
    };

    const canvasSize = canvas.getBoundingClientRect();
    const x = canvasSize.width - (outerDivSize.width ?? 0);
    const y = canvasSize.height - (outerDivSize.height ?? 0);

    wrapperRef.current.style.setProperty('--translate-x', `-${x}px`);
    wrapperRef.current.style.setProperty('--translate-y', `-${y}px`);
  }

  return (
    <div className={utils.cn('bg-primary-0 absolute top-0 left-0', isCurrent ? styles.image : 'opacity-0')} ref={wrapperRef}>
      <PixelatedImage onReady={handleReady} img={image} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} />
    </div>
  );
}