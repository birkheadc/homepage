'use client';

import * as React from 'react';
import { ImageProcessShaderMode } from '../../types/image/imageProcessShaderMode';
import { ImageProcessShaderEffect } from '../../types/image/imageProcessShaderEffect';
import utils from '@/utils';
import useTheme from '../../hooks/theme/useTheme';

type PixelatedImageProps = {
  className?: string,
  style?: React.CSSProperties,
  img: string,
  shaderMode: ImageProcessShaderMode,
  pixelLevel: number,
  shaderEffect?: ImageProcessShaderEffect,
  ariaLabel?: string,
  ariaHidden?: boolean,
  onReady?: () => void
}

export default function PixelatedImage(props: PixelatedImageProps): JSX.Element {

  const { className, style, img, shaderMode, pixelLevel, shaderEffect, ariaLabel, ariaHidden, onReady } = props;

  const [image, setImage] = React.useState<HTMLImageElement | null>(null);
  const { getThemeColors } = useTheme();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(function setImageOnMount() {
    const image = new Image();
    image.src = img;
    image.crossOrigin = 'anonymous';
    image.onload = () => setImage(image);
  }, [ img ]);

  React.useEffect(() => {
    (async function processAndDrawNewImageToCanvas() {
      if (image == null || canvasRef.current == null) return;
      await utils.image.processAndDrawImageToCanvas(image, canvasRef.current, getThemeColors(), pixelLevel, shaderMode, shaderEffect);
      onReady && onReady();
    })();
  }, [ image, canvasRef, pixelLevel, shaderMode, shaderEffect ]);

  React.useEffect(function setEventListenerToReprocessImageOnThemeChange() {
    const listener = () => {
      if (image == null || canvasRef.current == null) return;
      utils.image.processAndDrawImageToCanvas(image, canvasRef.current, getThemeColors(), pixelLevel, shaderMode, shaderEffect);
    }
    window.addEventListener('onchangetheme', listener);
    return (() => {
      window.removeEventListener('onthemechange', listener);
    });
  }, [ image, canvasRef, pixelLevel, shaderMode, shaderEffect ]);

  return (
    <canvas aria-hidden={ariaHidden} role='img' aria-label={ariaLabel} data-image={img} className={className} style={style} ref={canvasRef}></canvas>
  );
}