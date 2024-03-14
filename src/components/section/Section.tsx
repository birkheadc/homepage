import * as React from 'react';

type SectionProps = {
  children?: React.ReactNode
}

export default function Section(props: SectionProps): JSX.Element {
  return (
    <section className='flex w-full m-auto overflow-hidden p-4 min-h-[85svh]'>
      <div className='flex border-2 border-primary-1 flex-grow overflow-hidden'>
        { props.children }
      </div>
    </section>
  );
}