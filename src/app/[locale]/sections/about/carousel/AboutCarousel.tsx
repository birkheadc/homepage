import FadeCarousel from '@/components/fadeCarousel/FadeCarousel';
import { useTranslations } from 'next-intl';
import * as React from 'react';

interface AboutCarouselProps {

}

export default function AboutCarousel(props: AboutCarouselProps): JSX.Element {
  const t = useTranslations("AboutSection")

  const tabs: { tab: string, content: string }[] = [
    {
      tab: t('AboutThisSite.header'),
      content: t('AboutThisSite.body')
    },
    {
      tab: t('AboutColby.header'),
      content: t('AboutColby.body')
    },
    {
      tab: t('AboutColbysWork.header'),
      content: t('AboutColbysWork.body')
    }
  ]

  return (
    <div className='flex-grow'>
      <FadeCarousel tabs={tabs} />
    </div>
  );
}