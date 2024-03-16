'use client';

import { FrameContext } from '@/contexts/frame/FrameContext';
import * as React from 'react';
import Frame from './frame/Frame';
import styles from './FixedFrame.module.css';
import FocusTrap from 'focus-trap-react';
import FocusTrapChild from '../focusTrapChild/FocusTrapChild';
import Controls from './controls/Controls';
import utils from '@/utils';
import useScreenSize from '../../hooks/screenSize/useScreenSize';
import useSkin from '../../hooks/skin/useSkin';

interface FixedFrameProps {
  children?: React.ReactNode,
  logo: React.ReactNode
}

export default function FixedFrame(props: FixedFrameProps): JSX.Element {

  const { isZoomedIn } = React.useContext(FrameContext);
  const { skin } = useSkin();
  const skinStyle = SKIN_STYLES[skin];
  
  const { children, logo } = props;

  const ref = React.useRef<HTMLDivElement>(null);

  const screenSize = useScreenSize();

  React.useEffect(function updateCSSVariablesWhenScreenSizeChanges() {
    if (ref == null) return;
    const { bezelDimension, bezelZoomScale, bezelUnzoomTranslate } = calculateCSSVariablesFromScreenSize(screenSize);
    ref.current?.style.setProperty('--bezel-dimension', bezelDimension);
    ref.current?.style.setProperty('--bezel-zoom-scale', bezelZoomScale);
    ref.current?.style.setProperty('--bezel-unzoom-translate', bezelUnzoomTranslate);
    
  }, [ screenSize, ref ]);

  return (
    <div ref={ref} className={utils.cn(styles.container, isZoomedIn ? styles.zoom : '')}>
      <div className={styles.contentView}>
        <div className={styles.content}>
          { children }
        </div>
      </div>
      <div className={styles.bezel}>
        <div className={styles.view}>
          <div className={styles.logo}>
            { !isZoomedIn && logo }
          </div>
        </div>
      </div>
      <div className={utils.cn('bg-gradient-to-br shadow-3xl', styles.frame, skinStyle)}>

      </div>
      <div className={styles.controls}>
        <FocusTrap active={!isZoomedIn}>
          <FocusTrapChild>
            <Controls />
          </FocusTrapChild>
        </FocusTrap>
      </div>
    </div>
  );
}

const SKIN_STYLES: { [key: string]: string } = {
  neutral: 'from-neutral-300 to-neutral-500 border-neutral-900 border-t-neutral-600 border-l-neutral-600',
  berry: 'from-berry-300 to-berry-500 border-berry-900 border-t-berry-600 border-l-berry-600',
  grape: 'from-grape-300 to-grape-500 border-grape-900 border-t-grape-600 border-l-grape-600',
  kiwi: 'from-kiwi-300 to-kiwi-500 border-kiwi-900 border-t-kiwi-600 border-l-kiwi-600',
  dandelion: 'from-dandelion-300 to-dandelion-500 border-dandelion-900 border-t-dandelion-600 border-l-dandelion-600',
  teal: 'from-teal-300 to-teal-500 border-teal-900 border-t-teal-600 border-l-teal-600'
}

function calculateCSSVariablesFromScreenSize(size: { width: number, height: number } ): { bezelDimension: string, bezelZoomScale: string, bezelUnzoomTranslate: string } {
  
  const bezelDimension = Math.min((size.width * 0.8), (size.height * 0.5));
  const bezelZoomScaleX = (size.width / bezelDimension) * 100;
  const bezelZoomScaleY = ((size.height * 0.90) / bezelDimension) * 100;

  const bezelUnzoomTranslate = 0;
  return {
    bezelDimension: `${bezelDimension}px`,
    bezelZoomScale: `${bezelZoomScaleX}% ${bezelZoomScaleY}%`,
    bezelUnzoomTranslate: `0px ${-1 * (((size.height * 0.9) / 2) - (bezelDimension / 2))}px`
  }
}