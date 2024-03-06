import * as React from 'react';
import styles from './Spinner.module.css';
import utils from '../../utils';

type SpinnerProps = {

}

export default function Spinner(props: SpinnerProps): JSX.Element {
  return (
    <div className='flex items-center h-full'>
      <div className={utils.cn(styles.spinner, 'responsive-square rounded-full border-dashed border-t-4')}>

      </div>
    </div>
  );
}