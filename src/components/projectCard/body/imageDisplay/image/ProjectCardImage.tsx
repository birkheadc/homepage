import * as React from 'react';
import PixelatedImage from '../../../../pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../../../types/image/imageProcessShaderMode';
import utils from '../../../../../utils';
import styles from './ProjectCardImage.module.css';
import Spinner from '../../../../spinner/Spinner';

type ProjectCardImageProps = {
  outerDivSize: { width: number, height: number },
  image: string,
  isCurrent: boolean
}

export default function ProjectCardImage(props: ProjectCardImageProps): JSX.Element {

  const { outerDivSize, image, isCurrent } = props;
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [ canvasSize, setCanvasSize ] = React.useState<{ width: number, height: number} | undefined>(undefined);

  const handleReady = (canvas: HTMLCanvasElement) => {
    setCanvasSize({ width:canvas.getBoundingClientRect().width , height: canvas.getBoundingClientRect().height });
  }

  React.useEffect(function calculatePanVector() {
    if (outerDivSize.width == null || outerDivSize.height == null || canvasSize == null || wrapperRef.current == null) {
      console.log("didn't calc pan vector because");
      console.log({ outerDivSize, canvasSize, wrapperRef: wrapperRef.current });
      return;
    }

    const x = canvasSize.width - outerDivSize.width;
    const y = canvasSize.height - outerDivSize.height;

    wrapperRef.current.style.setProperty('--translate-x', `${x * -1}px`);
    wrapperRef.current.style.setProperty('--translate-y', `${y * -1}px`);

    console.log("calced pan vector", { x, y })

  }, [ outerDivSize, canvasSize, wrapperRef ]);

  return (
    <div className={utils.cn('absolute top-0 left-0', isCurrent ? styles.image : 'opacity-0')} ref={wrapperRef}>
      <PixelatedImage onReady={handleReady} img={image} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} />
    </div>
  );
}