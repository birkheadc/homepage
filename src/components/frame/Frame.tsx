'use client';

import { FrameContext } from '@/contexts/frame/FrameContext';
import utils from '@/utils';
import { ArrowDownIcon, ArrowUpIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Inter } from 'next/font/google';
import * as React from 'react';
import Controls from './controls/Controls';

const inter = Inter({ subsets: ["latin"] });


type FrameProps = {
  children?: React.ReactNode
}

export default function Frame(props: FrameProps): JSX.Element {

  const { zoomIn, zoomOut, isZoomedIn } = React.useContext(FrameContext);

  const toggleZoom = () => {
    isZoomedIn ? zoomOut() : zoomIn();
  }

  return isZoomedIn ? (
    <body className={utils.cn(inter.className, 'h-svh p-1 lg:p-4 bg-gradient-to-br from-neutral-900 to-neutral-950')}>
      <div className='flex flex-col items-center justify-start h-full gap-4 p-2 m-auto transition-all rounded-lg lg:p-8 bg-gradient-to-br from-neutral-300 to-neutral-500 w-fit'>
        <div className='p-2 transition-all lg:p-10 bg-gradient-to-br from-neutral-700 to-neutral-900 h-90 w-90 rounded-3xl'>
          <div className='w-full h-full p-4 bg-primary-3 rounded-2xl'>
            <div className='transition-all scale-100'>
              { props.children }
            </div>
          </div>
        </div>
        <button onClick={toggleZoom}><ChevronUpIcon width={'2rem'} /></button>
      </div>
    </body>
  ) : (
    <body className={utils.cn(inter.className, 'h-svh p-4 bg-gradient-to-br from-neutral-900 to-neutral-950')}>
      <div className='flex flex-col items-center justify-start h-full gap-4 p-8 m-auto transition-all rounded-lg bg-gradient-to-br from-neutral-300 to-neutral-500 w-fit'>
        <div className='p-6 transition-all lg:p-10 bg-gradient-to-br from-neutral-700 to-neutral-900 hw-70 lg:hw-50 rounded-3xl'>
          <div className='w-full h-full p-4 bg-primary-3 rounded-2xl'>
            <div className='transition-all scale-75'>
              { props.children }
            </div>
          </div>
        </div>
        <button onClick={toggleZoom}><ChevronDownIcon width={'2rem'} /></button>
        <Controls />
      </div>
    </body>
  );
}