'use client';

import * as React from 'react';
import PixelatedImage from '../../pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../types/image/imageProcessShaderMode';

import styles from './ProjectCardBody.module.css';
import utils from '../../../utils';
import { Project } from '../../../types/project/project';
import ProjectCardInformation from './info/ProjectCardInformation';

type ProjectCardBodyProps = {
  project: Project
}

export default function ProjectCardBody(props: ProjectCardBodyProps): JSX.Element {

  const { project } = props;
  const images = project.imageUrls;
  // Hack to get around css animation not restarting if the image never changes
  if (images.length === 1) {
    images.push(images[0]);
  }
  
  const [ current, setCurrent ] = React.useState<number>(0);
  const outerRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);

  const [ xDif, setXDif ] = React.useState<number>(0);
  const [ yDif, setYDif ] = React.useState<number>(0);

  React.useEffect(function setLoopInterval() {

    const calculateDifs = () => {
      const outer = outerRef.current;
      const inner = innerRef.current;

      if (outer == null || inner == null) return;

      const xDif = inner.getBoundingClientRect().width - outer.getBoundingClientRect().width;
      const yDif = inner.getBoundingClientRect().height - outer.getBoundingClientRect().height;

      setXDif(xDif);
      setYDif(yDif);
    }

    calculateDifs();

    const interval = setInterval(() => {

      setCurrent(c => {
        if (c >= images.length - 1) return 0;
        return c + 1;
      })

      calculateDifs();

    }, 12000);

    return (() => {
      clearInterval(interval)
    })

  }, [ images, innerRef, outerRef ]); 
  
  return (
    <div ref={outerRef} className='relative w-full h-full p-1 overflow-hidden bg-primary-2'>
      <div className='relative w-full h-full overflow-hidden bg-primary-3'>
        <div ref={innerRef} className={utils.cn(`absolute transition-all bottom-0 right-0 flex justify-end items-end`)}>
        { images.map(
          (image, index) =>
          <PixelatedImage key={`project-card-image-key-${image}-${index}`} className={utils.cn('', current === index ? styles.image : 'hidden')} style={{ transform: `translate(${xDif}px, ${yDif}px)` }} img={image} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={2}  />
        )}
        </div>
      </div>
      <ProjectCardInformation project={project} />
    </div>
  );
}