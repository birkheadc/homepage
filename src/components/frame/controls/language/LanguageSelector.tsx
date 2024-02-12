import Link from 'next/link';
import * as React from 'react';

interface LanguageSelectorProps {

}

export default function LanguageSelector(props: LanguageSelectorProps): JSX.Element {
  return (
    <div className='flex flex-row w-full gap-1'>
        <Link className='flex-grow p-1 px-3 text-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900' locale='en' href='/en'>english</Link>
        <Link className='flex-grow p-1 px-3 text-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900' locale='jp' href='/jp'>日本語</Link>
      </div>
  );
}