import * as React from 'react';
import { FrameContext } from '../../../../contexts/frame/FrameContext';
import { BarsArrowUpIcon } from '@heroicons/react/24/outline';
import { BarsArrowDownIcon } from '@heroicons/react/24/outline';

type MenuButtonProps = {

}

export default function MenuButton(props: MenuButtonProps): JSX.Element {

  const { zoomIn, zoomOut, isZoomedIn } = React.useContext(FrameContext);

  const toggleZoom = () => {
    (document.activeElement as HTMLElement).blur();
    isZoomedIn ? zoomOut() : zoomIn();
  }

  return (
    <button aria-expanded={!isZoomedIn} aria-controls='menu' className='mt-2 border-2 bg-gradient-to-br from-neutral-100 to-neutral-400 hocus:from-neutral-600 hocus:to-neutral-900 hocus:outline-none border-neutral-900 text-neutral-900 hocus:text-neutral-200' onClick={toggleZoom}>{ isZoomedIn ? <span><BarsArrowUpIcon width={'2rem'} /><span className='hidden'>open menu</span></span> : <span><BarsArrowDownIcon width={'2rem'} /><span className='hidden'>close menu</span></span> }</button>
  );
}