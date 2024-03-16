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
    <div className={utils.cn(styles.container, isZoomedIn ? styles.zoom : '')}>
      <div id='menu' aria-hidden={!isZoomedIn} className={styles.controls}>
        <FrameSlider tabIndex={isZoomedIn ? -1 : 0} />
        <ThemeSlider tabIndex={isZoomedIn ? -1 : 0} />
        <LanguageSelector tabIndex={isZoomedIn ? -1 : 0} />
      </div>
      <MenuButton />
    </div>
  );
}