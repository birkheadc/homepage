import * as React from 'react';
import ProjectCardImage from './image/ProjectCardImage';

type ProjectCardImageDisplayProps = {
  images: string[]
}

export default function ProjectCardImageDisplay(props: ProjectCardImageDisplayProps): JSX.Element {

  const { images } = props;
  const [ current, setCurrent ] = React.useState<number>(0);

  const outerDivRef = React.useRef<HTMLDivElement>(null);
  const [ size, setSize ] = React.useState<{ width: number, height: number}>({ width: 0, height: 0 });

  React.useEffect(function setResizeListener() {
    if (outerDivRef.current == null) return;
    setSize({
      width: outerDivRef.current.clientWidth,
      height: outerDivRef.current.clientHeight
    });
    const listener = () => {
      if (outerDivRef.current == null) return;
      setSize({
        width: outerDivRef.current.clientWidth,
        height: outerDivRef.current.clientHeight
      });
    }
    window.addEventListener('resize', listener);
    return (() => {
      window.removeEventListener('resize', listener);
    })

  }, [ outerDivRef ]);

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
    <div aria-hidden='true' ref={outerDivRef} className='relative w-full h-full overflow-hidden bg-primary-3'>
      {images.map(
        (image, index) =>
          <ProjectCardImage key={`project-card-image-key-${image}-${index}`}  outerDivSize={size} image={image} isCurrent={current === index} />
      )}
    </div>
  );
}