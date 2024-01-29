import * as React from 'react';
import { FrameContext } from '../../../contexts/frame/FrameContext';
import utils from '../../../utils';
import { FrameColor } from '@/types/frameColor/frameColor';

interface ControlsProps {
  changeColor: (color: FrameColor) => void
}

export default function Controls(props: ControlsProps): JSX.Element {

  const { isZoomedIn } = React.useContext(FrameContext);

  const CLASS_NAME = {
    common: 'transition-all duration-300 overflow-hidden flex flex-row gap-4 justify-start items-start w-full p-4',
    zoomedIn: 'h-0 p-0',
    zoomedOut: 'h-2/6'
  }

  const className = isZoomedIn ? utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedIn) : utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedOut);

  return (
    <div className={className}>
      <div className='flex flex-col gap-4'>
        <button className='w-20 h-6 bg-gradient-to-br from-neutral-500 to-neutral-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.GRAY)}></button>
        <button className='w-20 h-6 bg-gradient-to-br from-berry-500 to-berry-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.BERRY)}></button>
        <button className='w-20 h-6 bg-gradient-to-br from-grape-500 to-grape-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.GRAPE)}></button>
        <button className='w-20 h-6 bg-gradient-to-br from-kiwi-500 to-kiwi-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.KIWI)}></button>
        <button className='w-20 h-6 bg-gradient-to-br from-dandelion-500 to-dandelion-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.DANDELION)}></button>
        <button className='w-20 h-6 bg-gradient-to-br from-teal-500 to-teal-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.TEAL)}></button>
      </div>
    </div>
  );
}