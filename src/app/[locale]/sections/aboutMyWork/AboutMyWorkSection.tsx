import { useTranslations } from 'next-intl';
import * as React from 'react';
import DevIconsDisk from './devIconsDisk/DevIconsDisk';

type AboutMyWorkSectionProps = {

}

export default function AboutMyWorkSection(props: AboutMyWorkSectionProps): JSX.Element {
  const t = useTranslations('AboutMyWorkSection');

  return (
    <div className='flex flex-col items-stretch justify-center w-full h-full short:flex-row lg:flex-row'>
      <div className='flex flex-col justify-start flex-grow w-full gap-2 p-6'>
        <h2 className='text-4xl lg:text-7xl'>
          {t.rich('header', {
            em: inner =>
            <span className='text-primary-0'>{inner}</span>
          })}
        </h2>
        <span className='text-lg lg:text-xl'>{t('body')}</span>
      </div>
      <div className='flex items-center justify-center w-[100%] lg:w-[600px] short:w-full h-full'>
        <DevIconsDisk />
      </div>
    </div>
  );
}