'use client';

import { FrameContext } from '@/contexts/frame/FrameContext';
import utils from '@/utils';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import Controls from './controls/Controls';
import styles from './Frame.module.css';
import { FrameColor } from '@/types/frameColor/frameColor';
import Logo from './logo/Logo';

type FrameProps = {
  children?: React.ReactNode
}

export default function Frame(props: FrameProps): JSX.Element {

  const { zoomIn, zoomOut, isZoomedIn } = React.useContext(FrameContext);
  const [ color, setColor ] = React.useState<FrameColor>(FrameColor.GRAY);

  React.useEffect(() => {
    console.log({color});
  }, [color])

  const COLOR_STYLES: { [key: string]: string } = {
    neutral: 'from-neutral-300 to-neutral-500 border-neutral-900 border-t-neutral-600 border-l-neutral-600',
    berry: 'from-berry-300 to-berry-500 border-berry-900 border-t-berry-600 border-l-berry-600',
    grape: 'from-grape-300 to-grape-500 border-grape-900 border-t-grape-600 border-l-grape-600',
    kiwi: 'from-kiwi-300 to-kiwi-500 border-kiwi-900 border-t-kiwi-600 border-l-kiwi-600',
    dandelion: 'from-dandelion-300 to-dandelion-500 border-dandelion-900 border-t-dandelion-600 border-l-dandelion-600',
    teal: 'from-teal-300 to-teal-500 border-teal-900 border-t-teal-600 border-l-teal-600'
  }

  const colorStyle = COLOR_STYLES[color];

  const toggleZoom = () => {
    isZoomedIn ? zoomOut() : zoomIn();
  }

  const CLASS_NAMES = {
    common: {
      body: utils.cn(styles.body, 'h-svh bg-gradient-to-br from-neutral-100 to-neutral-300 overflow-hidden'),
      first: utils.cn(styles.first, 'flex flex-col items-center justify-start h-full gap-4 m-auto rounded-5xl bg-gradient-to-br from-neutral-300 to-neutral-500 w-fit shadow-3xl', colorStyle),
      second: utils.cn(styles.second, 'bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-3xl border-2 border-neutral-950'),
      third: utils.cn(styles.third, 'w-full h-full p-4 bg-primary-3 rounded-2xl shadow-inner overflow-hidden'),
      fourth: utils.cn(styles.fourth, 'p-6 w-full h-full transition-all ease-in-out origin-top overflow-y-auto duration-300')
    },
    zoomedIn: {
      body: 'p-0',
      first: 'p-2 px-0 rounded-none gap-1',
      second: 'p-2 h-90 w-90 px-0 rounded-none',
      third: 'rounded-none p-0 py-1',
      fourth: 'opacity-100 delay-700'
    },
    zoomedOut: {
      body: 'p-4',
      first: 'p-8 short:flex-row',
      second: 'p-6 hw-70 lg:hw-50',
      third: 'p-0',
      fourth: 'overflow-y-hidden opacity-0'
    }
  }

  const classNames = {
    body: utils.cn(CLASS_NAMES.common.body, isZoomedIn ? CLASS_NAMES.zoomedIn.body : CLASS_NAMES.zoomedOut.body),
    first: utils.cn(CLASS_NAMES.common.first, isZoomedIn ? CLASS_NAMES.zoomedIn.first : CLASS_NAMES.zoomedOut.first),
    second: utils.cn(CLASS_NAMES.common.second, isZoomedIn ? CLASS_NAMES.zoomedIn.second : CLASS_NAMES.zoomedOut.second),
    third: utils.cn(CLASS_NAMES.common.third, isZoomedIn ? CLASS_NAMES.zoomedIn.third : CLASS_NAMES.zoomedOut.third),
    fourth: utils.cn(CLASS_NAMES.common.fourth, isZoomedIn ? CLASS_NAMES.zoomedIn.fourth : CLASS_NAMES.zoomedOut.fourth),
  }

  return (
    <div className={classNames.body}>
      <div className={classNames.first}>
        <div className={classNames.second}>
          <div className={classNames.third}>
            { !isZoomedIn && <Logo /> }
            <div className={classNames.fourth}>
              { props.children }
            L</div>
          </div>
        </div>
        <button onClick={toggleZoom}>{ isZoomedIn ? <ChevronUpIcon width={'2rem'} /> : <ChevronDownIcon width={'2rem'} /> }</button>
        <Controls changeColor={setColor} />
      </div>
    </div>
  );
}