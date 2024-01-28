import * as React from 'react';

type SpinnerProps = {

}

export default function Spinner(props: SpinnerProps): JSX.Element {
  return (
    <div className='flex items-center h-full'>
      <div className='responsive-square rounded-full border-primary-500 border-t-4 animate-spin'>

      </div>
    </div>
  );
}