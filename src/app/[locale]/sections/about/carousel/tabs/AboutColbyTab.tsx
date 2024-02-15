import * as React from 'react';
import useRichTranslations from '../../../../../../hooks/useRichTranslations/useRichTranslations';
import ResumeLink from '../../../contact/resumeLink/ResumeLink';

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
        <a className='underline text-primary-0 hocus:text-primary-2' href=''>{inner}</a>
      })}</p>
    </div>
  );
}