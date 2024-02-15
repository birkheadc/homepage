import * as React from 'react';
import DevIconsDisk from './devIconsDisk/DevIconsDisk';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

type AboutMyWorkSectionProps = {

}

export default function AboutMyWorkSection(props: AboutMyWorkSectionProps): JSX.Element {
  const t = useRichTranslations('AboutMyWorkSection');

  return (
    <div className='flex flex-col items-stretch justify-center w-full min-h-[80svh] short:flex-row lg:flex-row'>
      <div className='flex flex-col justify-start flex-grow w-full gap-4 p-6'>
        <h2 className='text-4xl lg:text-6xl text-balance'>
          {t('header')}
        </h2>
        <p className='text-lg lg:text-xl whitespace-pre-line text-pretty z-20 pb-16 lg:pb-0 short:pb-0'>{t('body')}</p>
      </div>
      <div className='flex items-center justify-center lg:w-[25%] short:w-[25%]'>
        <DevIconsDisk />
      </div>
    </div>
  );
}