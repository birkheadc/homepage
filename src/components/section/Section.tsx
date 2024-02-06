import * as React from 'react';

type SectionProps = {
  children?: React.ReactNode
}

export default function Section(props: SectionProps): JSX.Element {
  return (
    <section className='border-2 border-primary-1 bg-primary-3 w-full min-h-[80svh] h-[80svh] short:min-h-[70svh] overflow-hidden'>
      { props.children }
    </section>
  );
}