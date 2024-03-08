import useTheme from '@/hooks/theme/useTheme';
import * as React from 'react';
import utils from '../../../../utils';

interface ThemeSliderProps {
  tabIndex: number
}

export default function ThemeSlider(props: ThemeSliderProps): JSX.Element {

  const { tabIndex } = props;
  const { theme, changeTheme } = useTheme();

  return (
    <div className='relative flex flex-row items-center w-full h-8'>
      <div className='absolute w-full h-full pointer-events-none'>
        <div className='w-[calc(7.69%)] transition-all duration-700 h-full border-y-2 rounded-lg overflow-hidden' style={{ transform: `translate(${100*Math.max(0, THEMES.indexOf(theme))}%, 0%)` }}>
          <div className='w-[1300%] flex flex-row items-center transition-all duration-700' style={{ transform: `translate(${-7.69*Math.max(0, THEMES.indexOf(theme))}%, 0%)` }}>
            {THEMES.map(
              (_theme, index) =>
              <div data-theme={_theme} key={`frame-color-buttons-key-${_theme}`} className={utils.cn(`w-[7.69%] h-8 bg-gradient-to-br from-primary-1 to-primary-2`,  index === 0 && 'border-l-2', index === THEMES.length - 1 && 'border-r-2')}></div>
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center w-full h-6 overflow-hidden rounded-md border-y-2'>
        {THEMES.map(
          (_theme, index) =>
          <button role='button' aria-pressed={theme === THEMES[index]} data-theme={_theme} key={`frame-color-buttons-key-${_theme}`} onClick={() => changeTheme(_theme)} className={utils.cn(`w-[7.69%] h-8 bg-gradient-to-br from-primary-1 to-primary-2 hocus:from-primary-2 hocus:to-primary-1 hocus:border-2`, index === 0 && 'border-l-2 rounded-l-md', index === THEMES.length - 1 && 'border-r-2 rounded-r-md')} tabIndex={tabIndex}></button>
        )}
      </div>
    </div>
  );

  // return (
  //   <div className='flex flex-row items-center w-full h-6'>
  //     {THEMES.map(
  //       (_theme, index) =>
  //       <button key={`theme-buttons-key-${_theme}`} onClick={() => changeTheme(_theme)} data-theme={_theme} className={`border-y-2 transition-all flex-grow h-4 bg-gradient-to-br from-primary-1 to-primary-2 ${_theme === theme ? 'h-6 rounded-md' : 'rounded-none'} ${index === 0 ? 'border-l-2' : ''} ${index === THEMES.length - 1 ? 'border-r-2' : ''}`}></button>
  //     )}
  //   </div>
  // );
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