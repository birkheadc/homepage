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
  
  return (
    <div className={`relative flex flex-col short:flex-row items-center justify-end h-full p-4 transition-all duration-300 delay-300 ${isZoomedIn ? 'gap-0' : 'gap-4'}`}>
      <div className={utils.cn('flex-grow h-0 w-full short:w-0 short:h-fit flex flex-col gap-2 overflow-hidden', styles.controls, isZoomedIn && styles.zoom)}>
        <FrameSlider tabIndex={isZoomedIn ? -1 : 0} />
        <ThemeSlider tabIndex={isZoomedIn ? -1 : 0} />
        <LanguageSelector tabIndex={isZoomedIn ? -1 : 0} />
      </div>
      <MenuButton />
    </div>
  );
}