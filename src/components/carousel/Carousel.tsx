import * as React from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import utils from '../../utils';

type CarouselProps = {
  children?: React.ReactNode
}

export default function Carousel(props: CarouselProps): JSX.Element {

  const [ emblaRef, emblaApi ] = useEmblaCarousel({
    containScroll: false
  });
  const [ isBackDisabled, setBackDisabled ] = React.useState<boolean>(true);
  const [ isForwardDisabled, setForwardDisabled ] = React.useState<boolean>(false);
  const [ current, setCurrent ] = React.useState<number>(0);

  const goBack = () => {
    emblaApi?.scrollPrev();
  }

  const goForward = () => {
    emblaApi?.scrollNext();
  }

  const goTo = (index: number) => {
    emblaApi?.scrollTo(index);
  }

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    // setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setCurrent(emblaApi.selectedScrollSnap())
    setBackDisabled(!emblaApi.canScrollPrev())
    setForwardDisabled(!emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])


  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-2'>
      <div className='flex items-center justify-center w-full h-full'>
        <button className='disabled:text-primary-2 text-primary-0 hover:text-primary-1 focus:text-primary-1' disabled={isBackDisabled} onClick={goBack}><ChevronLeftIcon width={'2rem'} /></button>
        <div className='w-full h-full overflow-hidden embla' ref={emblaRef}>
          <div className='flex w-full h-full gap-4 embla-container'>
            {React.Children.map(props.children,
              child =>
              <div key={`carousel-child-key-${child}`} className='flex justify-center flex-grow-0 flex-shrink-0 w-5/6 min-w-0 embla-slide'>
                {child}
              </div>
            )}
          </div>
        </div>
        <button className='disabled:text-primary-2 text-primary-0 hover:text-primary-1 focus:text-primary-1' disabled={isForwardDisabled} onClick={goForward}><ChevronRightIcon width={'2rem'} /></button>
      </div>
      <div className='relative pt-2 w-fit'>
        <div className='absolute w-4 h-4 transition-all duration-500 ease-in-out border-4 border-transparent rounded-full bg-primary-2 bg-clip-content' style={{ translate: `calc((100% + 0.5rem) * ${current})`}}></div>
        <div className='flex flex-row gap-2'>
          {React.Children.map(props.children,
            (child, index) =>
            <button key={`carousel-dot-button-key-${child}`} className='w-4 h-4 border-2 rounded-full' onClick={() => goTo(index)}></button>
          )}
        </div>
      </div>
    </div>
  );
}