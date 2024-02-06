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
}

export default function PixelatedImage(props: PixelatedImageProps): JSX.Element {
  const [image, setImage] = React.useState<HTMLImageElement | null>(null);
  const { getThemeColors } = useTheme();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(function setImageOnMount() {
    const image = new Image();
    image.src = props.img;
    image.crossOrigin = 'anonymous';
    image.onload = () => setImage(image);
  }, [ props.img ]);

  React.useEffect(() => {
    (async function processAndDrawNewImageToCanvas() {
      if (image == null || canvasRef.current == null) return;
      await utils.image.processAndDrawImageToCanvas(image, canvasRef.current, getThemeColors(), props.pixelLevel, props.shaderMode, props.shaderEffect);
    })();
  }, [ image, canvasRef ]);

  React.useEffect(function setEventListenerToReprocessImageOnThemeChange() {
    const listener = () => {
      if (image == null || canvasRef.current == null) return;
      utils.image.processAndDrawImageToCanvas(image, canvasRef.current, getThemeColors(), props.pixelLevel, props.shaderMode, props.shaderEffect);
    }
    window.addEventListener('onchangetheme', listener);
    return (() => {
      window.removeEventListener('onthemechange', listener);
    });
  }, [ image, canvasRef ]);

  return (
    <canvas data-image={props.img} className={props.className} style={props.style} ref={canvasRef}></canvas>
  );
}