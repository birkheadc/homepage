import { useTranslations } from 'next-intl';
import * as React from 'react';

type TestTabProps = {

}

export default function TestTab(props: TestTabProps): JSX.Element {

  const t = useTranslations();

  return (
    <div>
      Test
    </div>
  );
}