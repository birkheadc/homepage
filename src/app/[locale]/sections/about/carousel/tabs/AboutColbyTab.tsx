import * as React from 'react';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';
import ResumeLink from '../../../contact/resumeLink/ResumeLink';
import Link from 'next/link';

type AboutColbyTabProps = {

}

export default function AboutColbyTab(props: AboutColbyTabProps): JSX.Element {

  const t = useRichTranslations('AboutSection.AboutColby')

  return (
    <div className='whitespace-pre-wrap flex flex-col gap-2 text-lg pb-6'>
      <h3 className='text-xl lg:text-2xl text-primary-0'>{t('header')}</h3>
      <p>{t('body', {
        resumeLink: (inner) =>
        <ResumeLink className='underline text-primary-0 hocus:text-primary-2' text={inner} />,
        contactMeLink: (inner) =>
        <Link className='underline text-primary-0 hocus:text-primary-2' href='#contact-section'>{inner}</Link>
      })}</p>
    </div>
  );
}