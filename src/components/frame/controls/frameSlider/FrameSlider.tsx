import useSkin from '@/hooks/skin/useSkin';
import { FrameColor } from '@/types/frameColor/frameColor';
import utils from '@/utils';
import * as React from 'react';

interface FrameSliderProps {
  tabIndex: number
}

export default function FrameSlider(props: FrameSliderProps): JSX.Element {

  const { tabIndex } = props;

  const { skin, changeSkin } = useSkin();

  const STYLES: { [key: string]: string } = {
    neutral: 'from-neutral-400 to-neutral-700 hocus:from-neutral-700 hocus:to-neutral-400',
    berry: 'from-berry-400 to-berry-700 hocus:from-berry-700 hocus:to-berry-400',
    grape: 'from-grape-400 to-grape-700 hocus:from-grape-700 hocus:to-grape-400',
    kiwi: 'from-kiwi-400 to-kiwi-700 hocus:from-kiwi-700 hocus:to-kiwi-400',
    dandelion: 'from-dandelion-400 to-dandelion-700 hocus:from-dandelion-700 hocus:to-dandelion-400',
    teal: 'from-teal-400 to-teal-700 hocus:from-teal-700 hocus:to-teal-400'
  }

  return (
    <div className='relative flex flex-row items-center w-full h-8'>
      <div className='absolute w-full h-full pointer-events-none'>
        <div className='w-[calc(16.67%)] transition-all duration-700 h-full border-y-2 rounded-lg overflow-hidden' style={{ transform: `translate(${100*SKIN_COLORS.indexOf(skin)}%, 0%)` }}>
          <div className='w-[600%] flex flex-row items-center transition-all duration-700' style={{ transform: `translate(${-16.67*SKIN_COLORS.indexOf(skin)}%, 0%)` }}>
            {SKIN_COLORS.map(
              (color, index) =>
              <div key={`frame-color-buttons-key-${color}`} className={utils.cn(`w-[16.67%] h-8 bg-gradient-to-br`, STYLES[color], index === 0 && 'border-l-2', index === SKIN_COLORS.length - 1 && 'border-r-2')}></div>
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center w-full h-6 overflow-hidden rounded-md border-y-2'>
        {SKIN_COLORS.map(
          (color, index) =>
          <button key={`frame-color-buttons-key-${color}`} onClick={() => changeSkin(color)} className={utils.cn(STYLES[color], index === 0 && 'border-l-2 rounded-l-md', index === SKIN_COLORS.length - 1 && 'border-r-2 rounded-r-md', `w-[16.67%] h-8 bg-gradient-to-br`)} tabIndex={tabIndex}></button>
        )}
      </div>
    </div>
  );
}

const SKIN_COLORS: FrameColor[] = [
  FrameColor.NEUTRAL,
  FrameColor.BERRY,
  FrameColor.GRAPE,
  FrameColor.KIWI,
  FrameColor.DANDELION,
  FrameColor.TEAL
]