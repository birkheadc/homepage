import * as React from 'react';
import { FrameContext } from '../../../contexts/frame/FrameContext';
import utils from '../../../utils';

interface ControlsProps {

}

export default function Controls(props: ControlsProps): JSX.Element {

  const { isZoomedIn } = React.useContext(FrameContext);

  const CLASS_NAME = {
    common: 'transition-all duration-300 overflow-hidden',
    zoomedIn: 'h-0',
    zoomedOut: 'h-2/6'
  }

  const className = isZoomedIn ? utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedIn) : utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedOut);

  return (
    <div className={className}>
      Controls
    </div>
  );
}