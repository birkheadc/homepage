import * as React from 'react';
import { FrameContext } from '../../../contexts/frame/FrameContext';
import utils from '../../../utils';
import { FrameColor } from '@/types/frameColor/frameColor';
import useTheme from '@/hooks/theme/useTheme';
import useLanguage from '../../../hooks/language/useLanguage';

interface ControlsProps {
  changeColor: (color: FrameColor) => void
}

export default function Controls(props: ControlsProps): JSX.Element {

  const { isZoomedIn } = React.useContext(FrameContext);
  const { theme, changeTheme } = useTheme();
  const { changeLanguage } = useLanguage();

  const CLASS_NAME = {
    common: 'transition-all duration-300 overflow-hidden flex flex-col gap-4 justify-start items-start p-1',
    zoomedIn: 'h-0 p-0 w-0',
    zoomedOut: 'h-2/6 w-full'
  }

  const className = isZoomedIn ? utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedIn) : utils.cn(CLASS_NAME.common, CLASS_NAME.zoomedOut);

  return (
    <div className={className}>
      <div className='flex flex-row justify-between w-full gap-2'>
        <button className='flex-grow h-6 border-2 bg-gradient-to-br from-neutral-500 to-neutral-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.GRAY)}></button>
        <button className='flex-grow h-6 border-2 bg-gradient-to-br from-berry-500 to-berry-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.BERRY)}></button>
        <button className='flex-grow h-6 border-2 bg-gradient-to-br from-grape-500 to-grape-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.GRAPE)}></button>
        <button className='flex-grow h-6 border-2 bg-gradient-to-br from-kiwi-500 to-kiwi-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.KIWI)}></button>
        <button className='flex-grow h-6 border-2 bg-gradient-to-br from-dandelion-500 to-dandelion-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.DANDELION)}></button>
        <button className='flex-grow h-6 border-2 bg-gradient-to-br from-teal-500 to-teal-700 hover:outline outline-neutral-200' onClick={() => props.changeColor(FrameColor.TEAL)}></button>
      </div>
      <div className='flex flex-row w-full gap-1'>
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
      </div>
      <div className='flex flex-row w-full gap-1'>
        <button className='flex-grow border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-primary-0' onClick={() => changeLanguage('en')}>en</button>
        <button className='flex-grow border-2 bg-gradient-to-br from-primary-1 to-primary-2 hover:outline outline-primary-0' onClick={() => changeLanguage('jp')}>jp</button>
      </div>
    </div>
  );
}