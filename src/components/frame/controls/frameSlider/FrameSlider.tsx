import useSkin from '@/hooks/skin/useSkin';
import { FrameColor } from '@/types/frameColor/frameColor';
import utils from '@/utils';
import * as Slider from '@radix-ui/react-slider';
import * as React from 'react';
import styles from './FrameSlider.module.css';

interface FrameSliderProps {
}

export default function FrameSlider(props: FrameSliderProps): JSX.Element {

  const { skin, changeSkin } = useSkin();

  const handleChange = (value: number[]) => {
    const v = value[0];
    changeSkin(SKIN_COLORS[v]);
  }

  const STYLES: { [key: string]: { [key: string]: string } } = {
    neutral: {
      thumb: 'from-neutral-400 to-neutral-700 border-neutral-900 hocus:from-neutral-200 hocus:to-neutral-500',
      range: 'bg-neutral-300',
      track: 'bg-neutral-500'
    },
    berry: {
      thumb: 'from-berry-400 to-berry-700 border-berry-900 hocus:from-berry-200 hocus:to-berry-500',
      range: 'bg-berry-300',
      track: 'bg-berry-500'
    },
    grape: {
      thumb: 'from-grape-400 to-grape-700 border-grape-900 hocus:from-grape-200 hocus:to-grape-500',
      range: 'bg-grape-300',
      track: 'bg-grape-500'
    },
    kiwi: {
      thumb: 'from-kiwi-400 to-kiwi-700 border-kiwi-900 hocus:from-kiwi-200 hocus:to-kiwi-500',
      range: 'bg-kiwi-300',
      track: 'bg-kiwi-500'
    },
    dandelion: {
      thumb: 'from-dandelion-400 to-dandelion-700 border-dandelion-900 hocus:from-dandelion-200 hocus:to-dandelion-500',
      range: 'bg-dandelion-300',
      track: 'bg-dandelion-500'
    },
    teal: {
      thumb: 'from-teal-400 to-teal-700 border-teal-900 hocus:from-teal-200 hocus:to-teal-500',
      range: 'bg-teal-300',
      track: 'bg-teal-500'
    }
  } 

  return (
    <Slider.Root onValueChange={handleChange} value={[SKIN_COLORS.indexOf(skin)]} className='relative flex items-center w-full h-6 select-none touch-none' max={Object.keys(FrameColor).length - 1} step={1}>
      <Slider.Track className='relative flex flex-row items-stretch flex-grow h-3 border-2 rounded-full'>
        {SKIN_COLORS.map(
          (color, index) =>
          <div key={`slider-track-skins-key-${color}`} className={utils.cn(`flex-grow ${index === 0 || index === SKIN_COLORS.length -1 ? 'flex-grow-60' : ''}`, STYLES[color].track)}></div>
        )}
        <Slider.Range className={utils.cn('absolute h-full rounded-full')} />
      </Slider.Track>
      <Slider.Thumb className={utils.cn('block w-6 h-6 rounded-full bg-gradient-to-br border-2 outline-none cursor-pointer', STYLES[skin].thumb)} aria-label='Volume' />
    </Slider.Root>
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