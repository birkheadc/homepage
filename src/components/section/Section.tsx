import * as React from 'react';

type SectionProps = {
  children?: React.ReactNode
}

export default function Section(props: SectionProps): JSX.Element {
  return (
    <section className='border-2 w-full h-[80svh] short:h-[70svh]'>
      { props.children }
    </section>
  );
}