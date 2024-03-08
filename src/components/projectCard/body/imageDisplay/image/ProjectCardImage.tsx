import * as React from 'react';
import PixelatedImage from '../../../../pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../../../types/image/imageProcessShaderMode';
import utils from '../../../../../utils';
import styles from './ProjectCardImage.module.css';

type ProjectCardImageProps = {
  outerDivSize: { width: number | undefined, height: number | undefined },
  image: string,
  isCurrent: boolean
}

export default function ProjectCardImage(props: ProjectCardImageProps): JSX.Element {

  const { outerDivSize, image, isCurrent } = props;
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [ sizeDif, setSizeDif ] = React.useState<{ width: number, height: number}>({ width: 0, height: 0 });

  React.useEffect(function calculateSizeDif() {
    if (outerDivSize.width == null || outerDivSize.height == null || wrapperRef.current == null) return;

    const wrapperSize = { width: wrapperRef.current.getBoundingClientRect().width, height: wrapperRef.current.getBoundingClientRect().height };

    const x = wrapperSize.width - outerDivSize.width;
    const y = wrapperSize.height - outerDivSize.height;
    setSizeDif({ width: x, height: y });
  }, [ wrapperRef, outerDivSize ]);

  return (
    <div className={utils.cn('bg-primary-0 absolute top-0 left-0', isCurrent ? styles.image : 'hidden')} style={calculateWrapperStyle(sizeDif)} ref={wrapperRef}>
      <PixelatedImage img={image} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1}  />
    </div>
  );
}

function calculateWrapperStyle(sizeDif: { width: number, height: number }): React.CSSProperties {  
  return {
    ['--translate-x' as string]: `-${sizeDif.width}px`,
    ['--translate-y' as string]: `-${sizeDif.height}px`
}
}

// function calculateScaleFactor(outerDivSize: { width: number | undefined, height: number | undefined }, sizeDif: { width: number, height: number }): number {
//   if (outerDivSize.width == null || outerDivSize.height == null) return 1;

//   return 1;
// }