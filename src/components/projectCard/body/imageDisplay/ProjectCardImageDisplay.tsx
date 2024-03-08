import * as React from 'react';
import ProjectCardImage from './image/ProjectCardImage';

type ProjectCardImageDisplayProps = {
  images: string[]
}

export default function ProjectCardImageDisplay(props: ProjectCardImageDisplayProps): JSX.Element {

  const { images } = props;
  const [ current, setCurrent ] = React.useState<number>(0);

  const outerDivRef = React.useRef<HTMLDivElement>(null);

  // Hack to get around css animation not restarting if the image never changes
  if (images.length === 1) {
    images.push(images[0]);
  }

  React.useEffect(function setLoopInterval() {
    const interval = setInterval(() => {

      setCurrent(c => {
        if (c >= images.length - 1) return 0;
        return c + 1;
      })

    }, 12000);

    return (() => {
      clearInterval(interval)
    })
  }, []);

  return (
    <div ref={outerDivRef} className='relative w-full h-full overflow-hidden bg-primary-3'>
      {images.map(
        (image, index) =>
        <ProjectCardImage key={`project-card-image-key-${image}-${index}`} outerDivSize={{
            width: outerDivRef.current?.getBoundingClientRect().width,
            height: outerDivRef.current?.getBoundingClientRect().height
          }} image={image} isCurrent={current === index} />
      )}
    </div>
  );
}