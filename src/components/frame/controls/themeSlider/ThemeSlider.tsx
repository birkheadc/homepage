import useTheme from '@/hooks/theme/useTheme';
import * as React from 'react';

interface ThemeSliderProps {

}

export default function ThemeSlider(props: ThemeSliderProps): JSX.Element {

  const { theme, changeTheme } = useTheme();

  return (
    <div className='flex flex-row items-center w-full h-6'>
      {THEMES.map(
        (_theme, index) =>
        <button key={`theme-buttons-key-${_theme}`} onClick={() => changeTheme(_theme)} data-theme={_theme} className={`border-y-2 transition-all flex-grow h-4 bg-gradient-to-br from-primary-1 to-primary-2 ${_theme === theme ? 'h-6 rounded-md' : 'rounded-none'} ${index === 0 ? 'border-l-2' : ''} ${index === THEMES.length - 1 ? 'border-r-2' : ''}`}></button>
      )}
    </div>
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