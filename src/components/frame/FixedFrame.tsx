'use client';

import { FrameContext } from '@/contexts/frame/FrameContext';
import useSkin from '@/hooks/skin/useSkin';
import * as React from 'react';
import Frame from './frame/Frame';
import styles from './FixedFrame.module.css';
import FocusTrap from 'focus-trap-react';
import FocusTrapChild from '../focusTrapChild/FocusTrapChild';
import Controls from './controls/Controls';
import utils from '@/utils';

interface FixedFrameProps {
  children?: React.ReactNode,
  logo: React.ReactNode
}

export default function FixedFrame(props: FixedFrameProps): JSX.Element {

  const { isZoomedIn } = React.useContext(FrameContext);
  const { children, logo } = props;

  return (
    <div className={utils.cn(styles.frame, isZoomedIn ? styles.zoom : '')}>
      <div className={styles.view}>
        <div className={styles.content}>
          { children }
        </div>
        <div className={styles.logo}>
          { !isZoomedIn && logo }
        </div>
      </div>
      <Frame />
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