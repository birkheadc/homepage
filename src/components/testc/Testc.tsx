import { useTranslations } from 'next-intl';
import * as React from 'react';

type TestcProps = {

}

export default function Testc(props: TestcProps): JSX.Element {

  const t = useTranslations('Logo');

  return (
    <div>
      {t('subtext')}
    </div>
  );
}