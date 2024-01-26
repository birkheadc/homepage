import * as React from 'react';

type ColbyPortraitProps = {

}

export default function ColbyPortrait(props: ColbyPortraitProps): JSX.Element {
  return (
    <div className='absolute w-full h-full pointer-events-none'>
      <div className="absolute bottom-0 w-full h-full bg-[url('/colby/400.png')] z-10 bg-no-repeat -bg-left-bottom-100 lg:bg-left-bottom bg-fixed"></div>
      <div className="absolute bottom-0 w-full h-full bg-[url('/colby/400.png')] mix-blend-soft-light bg-no-repeat -bg-left-bottom-100 lg:bg-left-bottom"></div>
    </div>
  );
}