import useSkin from '@/hooks/skin/useSkin';
import { FrameColor } from '@/types/frameColor/frameColor';
import utils from '@/utils';
import * as React from 'react';

interface FrameSliderProps {
}

export default function FrameSlider(props: FrameSliderProps): JSX.Element {

  const { skin, changeSkin } = useSkin();

  const STYLES: { [key: string]: string } = {
    neutral: 'from-neutral-400 to-neutral-700',
    berry: 'from-berry-400 to-berry-700',
    grape: 'from-grape-400 to-grape-700',
    kiwi: 'from-kiwi-400 to-kiwi-700',
    dandelion: 'from-dandelion-400 to-dandelion-700',
    teal: 'from-teal-400 to-teal-700'
  }

  return (
    <div className='flex flex-row items-center w-full h-6'>
      {SKIN_COLORS.map(
        (color, index) =>
        <button onClick={() => changeSkin(color)} className={utils.cn(`border-y-2 transition-all flex-grow h-4 bg-gradient-to-br ${color === skin ? 'h-6 rounded-md' : 'rounded-none'} ${index === 0 ? 'border-l-2' : ''} ${index === SKIN_COLORS.length - 1 ? 'border-r-2' : ''}`, STYLES[color])}></button>
      )}
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