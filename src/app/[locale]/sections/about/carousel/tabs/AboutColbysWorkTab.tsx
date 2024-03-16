import * as React from 'react';
import useRichTranslations from '../../../../../../hooks/richTranslations/useRichTranslations';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type AboutColbysWorkTabProps = {

}

export default function AboutColbysWorkTab(props: AboutColbysWorkTabProps): JSX.Element {
  const t = useTranslations('AboutSection.AboutColbysWork')

  return (
    <div className='whitespace-pre-wrap flex flex-col gap-2 text-lg pb-6'>
      <h3 className='text-xl lg:text-2xl text-primary-0'>{t('header')}</h3>
      <p>{t.rich('body', {
        projectsLink: (inner) =>
        <Link className='underline text-primary-0 hocus:text-primary-2' href='#projects-section'>{inner}</Link>
      })}</p>
    </div>
  );
}