import * as React from 'react';
import PixelatedImage from '../../../../pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../../../types/image/imageProcessShaderMode';
import utils from '../../../../../utils';
import styles from './ProjectCardImage.module.css';

type ProjectCardImageProps = {
  outerDivSize: { width: number, height: number },
  image: string,
  isCurrent: boolean
}

export default function ProjectCardImage(props: ProjectCardImageProps): JSX.Element {

  const { outerDivSize, image, isCurrent } = props;
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(function calculateSizeDif() {
    if (wrapperRef.current == null) return;

    const wrapperSize = { width: wrapperRef.current.getBoundingClientRect().width, height: wrapperRef.current.getBoundingClientRect().height };

    const x = wrapperSize.width - outerDivSize.width;
    const y = wrapperSize.height - outerDivSize.height;

    wrapperRef.current.style.setProperty('--translate-x', `-${x}px`);
    wrapperRef.current.style.setProperty('--translate-y', `-${y}px`);
  }, [ wrapperRef, outerDivSize ]);

  return (
    <div className={utils.cn('bg-primary-0 absolute top-0 left-0', isCurrent ? styles.image : 'hidden')} ref={wrapperRef}>
      <PixelatedImage img={image} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1}  />
    </div>
  );
}