import * as React from 'react';

type FocusTrapChildProps = {
  children?: React.ReactNode,
  className?: string
}

const FocusTrapChild = React.forwardRef((props: FocusTrapChildProps, ref: React.ForwardedRef<HTMLDivElement>) => {

  const { children, className } = props;

  return (
    <div className={className} ref={ref}>
      { children }
    </div>
  );
});

export default FocusTrapChild