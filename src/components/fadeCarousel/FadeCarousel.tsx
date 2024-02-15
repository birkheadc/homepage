'use client';

import * as React from 'react';
import styles from './FadeCarousel.module.css';
import utils from '../../utils';

type FadeCarouselProps = {
  tabs: {
    tab: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray,
    content: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray
  }[]
}

export default function FadeCarousel(props: FadeCarouselProps): JSX.Element {

  const { tabs } = props;
  const [ current, setCurrent ] = React.useState<number>(0);

  return (
    <div className='flex flex-row items-center justify-center w-full h-full'>
      <div className='relative flex flex-col w-full h-full border-2'>
        <div className='flex flex-row w-full px-2 pt-2 bg-primary-1'>
          {tabs.map(
            (tab, index) =>
            <div key={`fade-carousel-tab-key-${tab.tab}`} className={utils.cn('', styles.tab, current === index ? styles.show : styles.hide)}>
              <div className={utils.cn('absolute inset-0 z-10', styles.curtain)}></div>
              <button className={utils.cn('p-1 px-3', styles.button)} type='button' onClick={() => {setCurrent(index)}}>{tab.tab}</button>
            </div>
          )}
        </div>
        <div className='relative w-full h-full'>
        { tabs.map(
          (tab, index) =>
          <div key={`fade-carousel-key-${tab.tab}`} className={utils.cn('absolute inset-0', styles.child, current === index ? styles.show : styles.hide)}>
            <div className={utils.cn('absolute inset-0 z-10', styles.curtain)}></div>
            <div className={utils.cn('p-4 h-full overflow-auto overscroll-contain ', styles.content)}>
              {tab.content}
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}