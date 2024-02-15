import * as React from 'react';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';

type AboutColbysWorkTabProps = {

}

export default function AboutColbysWorkTab(props: AboutColbysWorkTabProps): JSX.Element {
  const t = useRichTranslations('AboutSection.AboutColbysWork')

  return (
    <div className='whitespace-pre-wrap flex flex-col gap-2 text-lg pb-6'>
      <h3 className='text-xl lg:text-2xl text-primary-0'>{t('header')}</h3>
      <p>{t('body')}</p>
    </div>
  );
}