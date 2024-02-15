import FadeCarousel from '@/components/fadeCarousel/FadeCarousel';
import * as React from 'react';
import useRichTranslations from '../../../../../hooks/useRichTranslations/useRichTranslations';
import AboutThisSiteTab from './tabs/AboutThisSiteTab';
import AboutColbyTab from './tabs/AboutColbyTab';

interface AboutCarouselProps {

}

export default function AboutCarousel(props: AboutCarouselProps): JSX.Element {
  const t = useRichTranslations("AboutSection")

  const tabs = [
    {
      tab: t('AboutThisSite.tab'),
      content: <AboutThisSiteTab />
    },
    {
      tab: t('AboutColby.tab'),
      content: <AboutColbyTab />
    },
    {
      tab: t('AboutColbysWork.tab'),
      content: t('AboutColbysWork.body')
    }
  ]

  return (
    <div className='flex-grow m-auto w-[min(100%,1024px)]  h-full'>
      <FadeCarousel tabs={tabs} />
    </div>
  );
}