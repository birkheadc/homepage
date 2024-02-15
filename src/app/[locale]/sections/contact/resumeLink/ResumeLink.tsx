'use client';

import useLanguage from '@/hooks/language/useLanguage';
import * as React from 'react';
import utils from '../../../../../utils';

interface ResumeLinkProps {
  className?: string,
  text?: string | React.ReactNode | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray
}

export default function ResumeLink(props: ResumeLinkProps): JSX.Element {

  const language = useLanguage();
  const [ link, setLink ] = React.useState<string>('');

  React.useEffect(function generateLink() {
    setLink(`https://resume.birkheadc.me/pdf?language=${language}&`);
  }, []);

  return (
    <a className={utils.cn('', props.className)} href={link} target='_blank' rel='noopener noreferrer'>{props.text}</a>
  );
}