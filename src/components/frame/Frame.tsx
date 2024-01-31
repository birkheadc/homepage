'use client';

import { FrameContext } from '@/contexts/frame/FrameContext';
import utils from '@/utils';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import * as React from 'react';
import Controls from './controls/Controls';
import styles from './Frame.module.css';
import Logo from './logo/Logo';
import useSkin from '../../hooks/skin/useSkin';
import useTheme from '../../hooks/theme/useTheme';

type FrameProps = {
  children?: React.ReactNode
}

export default function Frame(props: FrameProps): JSX.Element {

  const { zoomIn, zoomOut, isZoomedIn } = React.useContext(FrameContext);
  const { skin, skinStyle, changeSkin } = useSkin();
  const { theme } = useTheme();

  const toggleZoom = () => {
    isZoomedIn ? zoomOut() : zoomIn();
  }

  const CLASS_NAMES = {
    common: {
      body: utils.cn(styles.body, 'h-svh bg-gradient-to-br from-neutral-300 to-neutral-800 overflow-hidden'),
      first: utils.cn(styles.first, 'flex short:w-full short:flex-row flex-col items-center justify-start h-full gap-4 m-auto rounded-5xl bg-gradient-to-br from-neutral-300 to-neutral-500 w-fit shadow-3xl', skinStyle),
      second: utils.cn(styles.second, 'bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-3xl border-2 border-neutral-950'),
      third: utils.cn(styles.third, 'relative w-full h-full p-4 bg-primary-3 rounded-2xl shadow-inner overflow-hidden'),
      fourth: utils.cn(styles.fourth, 'p-6 w-full h-full transition-all ease-in-out origin-top overflow-y-auto duration-300')
    },
    zoomedIn: {
      body: 'p-0',
      first: 'p-2 px-0 rounded-none short:rounded-r-5xl gap-1 short:w-[100lvw]',
      second: 'p-2 h-[90svh] w-[100lvw] px-0 rounded-none',
      third: 'rounded-none p-0 py-1',
      fourth: 'opacity-1 delay-700'
    },
    zoomedOut: {
      body: 'p-4',
      first: 'p-8',
      second: 'p-6 hw-square-70 lg:hw-square-50',
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
            </div>
          </div>
        </div>
        <button onClick={toggleZoom}>{ isZoomedIn ? <ChevronUpIcon width={'2rem'} /> : <ChevronDownIcon width={'2rem'} /> }</button>
        <Controls changeColor={changeSkin}/>
      </div>
    </div>
  );
}