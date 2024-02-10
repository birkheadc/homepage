'use client';

import useLanguage from '@/hooks/language/useLanguage';
import * as React from 'react';

interface ResumeLinkProps {
  text?: string
}

export default function ResumeLink(props: ResumeLinkProps): JSX.Element {

  const language = useLanguage();
  const [ link, setLink ] = React.useState<string>('');

  React.useEffect(function generateLink() {
    setLink(`https://resume.birkheadc.me/pdf?language=${language}&`);
  }, []);

  return (
    <a className='text-xl underline text-primary-0 hocus:text-primary-1 focus:text-primary-1 lg:text-2xl' href={link} target='_blank' rel='noopener noreferrer'>{props.text}</a>
  );
}