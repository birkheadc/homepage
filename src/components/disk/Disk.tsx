'use client';

import * as React from 'react';
import styles from './Disk.module.css';
import utils from '../../utils';

type DiskProps = {
  children?: React.ReactNode,
  outerClassname?: string,
  innerClassname?: string
}

export default function Disk(props: DiskProps): JSX.Element {

  const length = React.Children.count(props.children);
  const [ indexes, setIndexes ] = React.useState<number[]>([0, 0, 0, 0]);

  React.useEffect(function setIndexIncrementerInterval() {
    const interval = setInterval(() => {
      setIndexes(i => {
        let next = i[3] + 1;
        if (next >= length) next -= length;
        const newIndexes = i.slice(1);
        newIndexes.push(next);
        return newIndexes;
      })
    }, 2000);
    return (() => {
      clearInterval(interval);
    })
  }, [length]);

  return (
    <div className={utils.cn('relative p-4 w-full h-full ', props.outerClassname)}>
      <div className='flex items-center justify-center w-full h-full overflow-hidden '>
        <div className={utils.cn('absolute w-full h-full translate-y-1/3 short:translate-y-0 short:translate-x-1/2 lg:translate-y-0 lg:translate-x-1/2 ', props.innerClassname)}>
          {React.Children.map(props.children,
            (child, index) =>
            <div className={utils.cn('absolute w-full h-full ', indexes.includes(index) ? styles.disk : '')}>
              <div className={utils.cn('absolute bottom-0 lg:top-0 lg:bottom-auto right-0', indexes.includes(index) ? styles.diskChild : '')}>
                {child}
              </div>
            </div>  
          )}
        </div>
      </div>
    </div>
  );
}

// export default function Disk(props: DiskProps): JSX.Element {

//   const children = React.Children.toArray(props.children);

//   const [ indexes, setIndexes ] = React.useState<{t: number, r: number, b: number, l: number}>({
//     t: 1, 
//     r: 2,
//     b: 3,
//     l: 0
//   });

//   React.useEffect(function setIndexIncrementerIntervals() {
//     const interval = setInterval(() => {
//       setIndexes(i => {
//         const { t, r, b, l } = i;
//         if (t < r && t < b && t < l) {
//           let n = t + 4;
//           if (n >= children.length) n -= children.length;
//           return { ...i, t: n }
//         }
//         if (r < b && r < l) {
//           let n = r + 4;
//           if (n >= children.length) n -= children.length;
//           return { ...i, r: n }
//         }
//         if (b < l) {
//           let n = b + 4;
//           if (n >= children.length) n -= children.length;
//           return { ...i, b: n }
//         }
//         let n = l + 4;
//         if (n >= children.length) n -= children.length;
//         return { ...i, l: n }
//       })
//     }, 2000);

//     return (() => {
//       clearInterval(interval)
//     })
//   }, [ children ]);

  

//   return (
//     <div className={utils.cn('relative p-4 w-full h-full ', props.outerClassname)}>
//       <div className='flex items-center justify-center w-full h-full overflow-hidden '>
//         <div className={utils.cn('absolute w-full h-full translate-y-1/3 short:translate-y-0 short:translate-x-1/2 lg:translate-y-0 lg:translate-x-1/2 ', props.innerClassname)}>
//           <div className={utils.cn('absolute w-full h-full ', styles.disk)}>
//             <div className={utils.cn('absolute top-0 left-0', styles.diskChild)}>{children[indexes.t]}</div>
//             <div className={utils.cn('absolute top-0 right-0', styles.diskChild)}>{children[indexes.r]}</div>
//             <div className={utils.cn('absolute bottom-0 right-0', styles.diskChild)}>{children[indexes.b]}</div>
//             <div className={utils.cn('absolute bottom-0 left-0', styles.diskChild)}>{children[indexes.l]}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }