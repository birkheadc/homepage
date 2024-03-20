'use client';

import * as React from 'react';
import { FrameContext } from '../../contexts/frame/FrameContext';
import useSkin from '../../hooks/skin/useSkin';
import styles from './SiteFrame.module.css';
import utils from '@/utils';
import Controls from './controls/Controls';
import FocusTrap from 'focus-trap-react';
import FocusTrapChild from '../focusTrapChild/FocusTrapChild';

type SiteFrameProps = {
  children?: React.ReactNode,
  logo: React.ReactNode
}

export default function SiteFrame(props: SiteFrameProps): JSX.Element {

  const { isZoomedIn } = React.useContext(FrameContext);
  const { skin } = useSkin();

  const { children, logo } = props;

  const skinStyle = SKIN_STYLES[skin];

  return (
    <div className={utils.cn(styles.frame, isZoomedIn && styles.zoom)}>
      <div className={utils.cn('bg-gradient-to-br shadow-3xl', skinStyle, styles.outer)}>
        <div className={styles.inner}>
          <div className={styles.screen}>
            <div className={styles.bezel}>
              <div className={styles.view}>
                {!isZoomedIn && logo} 
                <div aria-hidden={isZoomedIn} className={styles.content}>
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.controls}>
            <FocusTrap active={!isZoomedIn}>
              <FocusTrapChild className='h-full'>
                <Controls />
              </FocusTrapChild>
            </FocusTrap>
          </div>
        </div>
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