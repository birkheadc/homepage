'use client';

import * as React from 'react';
import styles from './Frame.module.css';
import { FrameContext } from '@/contexts/frame/FrameContext';
import useSkin from '@/hooks/skin/useSkin';
import utils from '../../../utils';

interface FrameProps {

}

export default function Frame(props: FrameProps): JSX.Element {

  const { isZoomedIn } = React.useContext(FrameContext);
  const { skin } = useSkin();
  const skinStyle = SKIN_STYLES[skin];

  return (
    <div className={utils.cn('absolute inset-2 rounded-3xl bg-gradient-to-br', skinStyle)}>
      
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