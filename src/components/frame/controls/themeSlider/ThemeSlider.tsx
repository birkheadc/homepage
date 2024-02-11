import useTheme from '@/hooks/theme/useTheme';
import * as Slider from '@radix-ui/react-slider';
import * as React from 'react';
import styles from './ThemeSlider.module.css';
import utils from '@/utils';

interface ThemeSliderProps {

}

export default function ThemeSlider(props: ThemeSliderProps): JSX.Element {

  const { theme, changeTheme } = useTheme();

  const handleChange = (value: number[]) => {
    const v = value[0];
    changeTheme(THEMES[v]);
  }

  return (
    <Slider.Root onValueChange={handleChange} value={[THEMES.indexOf(theme)]} className='relative flex items-center w-full h-6 select-none touch-none' max={Object.keys(THEMES).length - 1} step={1}>
      <Slider.Track className='relative flex flex-row items-stretch flex-grow h-3 border-2 rounded-full'>
        {THEMES.map(
          (theme, index) =>
          <div key={`slider-track-themes-key-${theme}`} data-theme={theme} className={`flex-grow h-full bg-gradient-to-br from-primary-1 to-primary-2 ${index === 0 || index === THEMES.length - 1 ? 'flex-grow-75' : ''}`}></div>
        )}
        {/* <div className={utils.cn('flex-grow', styles.trackTop)}></div> */}
        {/* <div className={utils.cn('flex-grow', styles.trackBottom)}></div> */}
        <Slider.Range className={utils.cn('absolute h-full rounded-full')} />
      </Slider.Track>
      <Slider.Thumb className={utils.cn('block w-6 h-6 rounded-full bg-gradient-to-br from-primary-1 to-primary-2 border-2 outline-none cursor-pointer')} aria-label='Volume' />
    </Slider.Root>
  );
}

const THEMES = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
]