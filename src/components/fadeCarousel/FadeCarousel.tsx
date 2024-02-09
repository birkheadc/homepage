'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import styles from './FadeCarousel.module.css';
import utils from '../../utils';

type FadeCarouselProps = {
  children?: React.ReactNode
}

export default function FadeCarousel(props: FadeCarouselProps): JSX.Element {

  const children = React.Children.toArray(props.children);
  const [ current, setCurrent ] = React.useState<number>(0);

  const goBack = () => {
    setCurrent(c => Math.max(0, c - 1));
  }

  const goForward = () => {
    setCurrent(c => Math.min(children.length - 1, c + 1));
  }

  return (
    <div className='flex flex-row justify-center items-center w-full h-full'>
      <button className='text-primary-0 disabled:text-primary-2 hover:text-primary-1 focus:text-primary-1' disabled={current === 0} onClick={goBack}><ChevronLeftIcon width={'2rem'}/></button>
      <div className='relative w-full h-full border-2'>
        { children.map(
          (child, index) =>
          <div key={`fade-carousel-key-${index}`} className={utils.cn('absolute inset-0', styles.child, current === index ? styles.show : styles.hide)}>
            <div className={utils.cn('absolute inset-0', styles.curtain)}></div>
            <div className={utils.cn('', styles.content)}>
              { child }
            </div>
          </div>
        )}
      </div>
      <button className='text-primary-0 disabled:text-primary-2 hover:text-primary-1 focus:text-primary-1' disabled={current >= children.length - 1} onClick={goForward}><ChevronRightIcon width={'2rem'}/></button>
    </div>
  );
}