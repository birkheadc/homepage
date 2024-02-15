import * as React from 'react';
import styles from './Logo.module.css';
import utils from '@/utils';
import useRichTranslations from '../../../hooks/useRichTranslations/useRichTranslations';

interface LogoProps {

}

export default function Logo(props: LogoProps): JSX.Element {

  const t = useRichTranslations('Logo');

  return (
    <div className='absolute flex items-center justify-center w-full h-full overflow-hidden '>
      <h1 className={utils.cn(styles.text, 'text-5xl lg:text-7xl short:text-5xl uppercase font-bold text-black font-special')}>game guy</h1>
      <span className='absolute bottom-0 p-2 text-center lg:text-xl text-primary-2 text-pretty' >{t('subtext')}</span>
    </div>
  );
}