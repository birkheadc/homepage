'use client';

import * as React from 'react';
import styles from './ColbyPortrait.module.css';

type ColbyPortraitProps = {

}

export default function ColbyPortrait(props: ColbyPortraitProps): JSX.Element {
  return (
    <div className='absolute w-full h-full pointer-events-none'>
      <div className={styles.shadow}></div>
      <div className={styles.portrait}></div>
    </div>
  );
}