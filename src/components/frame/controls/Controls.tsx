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
      <ThemeSlider />
      <div className='flex flex-row w-full gap-1'>
        <Link className='flex-grow p-1 px-3 text-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900' locale='en' href='/en'>english</Link>
        <Link className='flex-grow p-1 px-3 text-center border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 text-neutral-900 hocus:text-neutral-200 border-neutral-900' locale='jp' href='/jp'>日本語</Link>
      </div>
    </div>
  );
}