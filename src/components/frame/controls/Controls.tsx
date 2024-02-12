import * as React from 'react';
import { FrameContext } from '../../../contexts/frame/FrameContext';
import utils from '../../../utils';
import FrameSlider from './frameSlider/FrameSlider';
import styles from './Controls.module.css';
import ThemeSlider from './themeSlider/ThemeSlider';
import LanguageSelector from './language/LanguageSelector';
import MenuButton from './menuButton/MenuButton';

interface ControlsProps {

}

export default function Controls(props: ControlsProps): JSX.Element {

  const { isZoomedIn } = React.useContext(FrameContext);

  // const CLASS_NAME = {
  //   common: 'transition-all duration-300 overflow-hidden flex flex-col gap-4 justify-center items-start p-1',
  //   zoomedIn: 'h-0 p-0 w-0 opacity-0',
  //   zoomedOut: 'h-2/6 short:h-full w-full opacity-100'
  // }

  // const className = isZoomedIn ? utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedIn, styles.controls) : utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedOut, styles.controls);

  return (
    <div className={`relative flex flex-col items-center justify-end h-full p-4`}>
      <div className={utils.cn('p-4 absolute top-0 w-full flex flex-col gap-2 overflow-hidden', styles.controls, isZoomedIn && styles.zoom)}>
        <FrameSlider />
        <ThemeSlider />
        <LanguageSelector />
      </div>
      <MenuButton />
    </div>
  );
}