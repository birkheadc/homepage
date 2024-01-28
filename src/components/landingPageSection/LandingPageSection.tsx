import * as React from 'react';
import utils from '../../utils';
import Footer from '../footer/Footer';

type LandingPageSectionProps = {
  children?: React.ReactNode,
  id: string,
  className?: string,
  isLast?: boolean
}

export default function LandingPageSection(props: LandingPageSectionProps): JSX.Element {
  return (
    <section id={props.id} className={utils.cn(`relative ${ props.isLast ? 'h-lvh-nav' : 'h-svh-nav'} `, props.className)}>
      {props.children}
      { props.isLast && <Footer />}
    </section>
  );
}