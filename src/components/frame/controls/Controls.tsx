import * as React from 'react';
import { FrameContext } from '../../../contexts/frame/FrameContext';
import utils from '../../../utils';
import { FrameColor } from '@/types/frameColor/frameColor';
import useTheme from '@/hooks/theme/useTheme';
import Link from 'next/link';
import FrameSlider from './frameSlider/FrameSlider';
import styles from './Controls.module.css';
import ThemeSlider from './themeSlider/ThemeSlider';

interface ControlsProps {
  skinColor: FrameColor,
  changeSkinColor: (color: FrameColor) => void
}

export default function Controls(props: ControlsProps): JSX.Element {

  const { skinColor, changeSkinColor } = props;
  const { isZoomedIn } = React.useContext(FrameContext);
  const { changeTheme } = useTheme();

  const CLASS_NAME = {
    common: 'transition-all duration-300 overflow-hidden flex flex-col gap-4 justify-center items-start p-1',
    zoomedIn: 'h-0 p-0 w-0 opacity-0',
    zoomedOut: 'h-2/6 short:h-full w-full opacity-100'
  }

  const className = isZoomedIn ? utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedIn, styles.controls) : utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedOut, styles.controls);

  return (
    <div className={className}>
      <FrameSlider />
      {/* <div className='flex flex-row w-full gap-1'>
        <button data-theme='a' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('a')}></button>
        <button data-theme='b' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('b')}></button>
        <button data-theme='c' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('c')}></button>
        <button data-theme='d' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('d')}></button>
        <button data-theme='e' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('e')}></button>
        <button data-theme='f' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('f')}></button>
        <button data-theme='g' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('g')}></button>
        <button data-theme='h' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('h')}></button>
        <button data-theme='i' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('i')}></button>
        <button data-theme='j' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('j')}></button>
        <button data-theme='k' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('k')}></button>
        <button data-theme='l' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('l')}></button>
        <button data-theme='m' className='flex-grow h-6 border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-neutral-200' onClick={() => changeTheme('m')}></button>
      </div> */}
      <ThemeSlider />
      <div className='flex flex-row w-full gap-1'>
        <Link className='flex-grow text-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900' locale='en' href='/en'>en</Link>
        <Link className='flex-grow text-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900' locale='jp' href='/jp'>jp</Link>
      </div>
    </div>
  );
}