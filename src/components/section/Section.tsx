import * as React from 'react';

type SectionProps = {
  children?: React.ReactNode
}

export default function Section(props: SectionProps): JSX.Element {
  return (
    <section className='w-full m-auto overflow-hidden border-2 max-w-7xl border-primary-1'>
      { props.children }
    </section>
  );
}