import * as React from 'react';

type SectionProps = {
  children?: React.ReactNode
}

export default function Section(props: SectionProps): JSX.Element {
  return (
    <section className='border-2 border-primary-1 w-full overflow-hidden'>
      { props.children }
    </section>
  );
}