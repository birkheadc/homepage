import * as React from 'react';
import styles from './Logo.module.css';
import utils from '@/utils';
import { useTranslations } from 'next-intl';

interface LogoProps {

}

export default function Logo(props: LogoProps): JSX.Element {

  const t = useTranslations('Logo');

  return (
    <div className='absolute flex items-center justify-center w-full h-full overflow-hidden '>
      <h1 className={utils.cn(styles.text, 'text-5xl lg:text-5xl short:text-2xl uppercase font-bold text-black font-en')}>game guy</h1>
      <span className='absolute bottom-0 p-2 text-center lg:text-xl text-primary-2' >{t('subtext')}</span>
    </div>
  );
}