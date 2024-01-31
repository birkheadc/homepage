import * as React from 'react';
import styles from './Logo.module.css';
import utils from '@/utils';

interface LogoProps {

}

export default function Logo(props: LogoProps): JSX.Element {
  return (
    <div className='absolute flex items-center justify-center w-full h-full overflow-hidden '>
      <h1 className={utils.cn(styles.text, 'text-3xl lg:text-5xl short:text-2xl uppercase font-bold text-black')}>game guy</h1>
      <span className='absolute bottom-0 lg:text-xl text-primary-2' >woah</span>
    </div>
  );
}