'use client';

import Link from 'next/link';
import * as React from 'react';
import useLanguage from '../../../../hooks/language/useLanguage';

interface LanguageSelectorProps {

}

export default function LanguageSelector(props: LanguageSelectorProps): JSX.Element {

  const { language, changeLanguage } = useLanguage();
  
  return (
    <div className='flex flex-row w-full gap-1'>
      <button className={`flex-grow p-1 px-3 tex'jp't-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900 ${language === 'en' && 'bg-none border-none text-neutral-200 pointer-events-none'}`} onClick={() => changeLanguage('en')}>english</button>
      <button className={`flex-grow p-1 px-3 text-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900 ${language === 'jp' && 'bg-none border-none text-neutral-200 pointer-events-none'}`} onClick={() => changeLanguage('jp')}>日本語</button>
      {/* <Link className={`flex-grow p-1 px-3 text-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900 ${language === 'en' && 'bg-none border-none text-neutral-200 pointer-events-none'}`} locale='en' href='/en'>english</Link> */}
      {/* <Link className={`flex-grow p-1 px-3 text-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900 ${language === 'jp' && 'bg-none border-none text-neutral-200 pointer-events-none'}`} locale='jp' href='/jp'>日本語</Link> */}
    </div>
  );
}