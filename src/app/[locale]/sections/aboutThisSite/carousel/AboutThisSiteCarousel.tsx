import * as React from 'react';
import FadeCarousel from '../../../../../components/fadeCarousel/FadeCarousel';
import { useTranslations } from 'next-intl';

type AboutThisSiteCarouselProps = {

}

export default function AboutThisSiteCarousel(props: AboutThisSiteCarouselProps): JSX.Element {

  const t = useTranslations("AboutThisSiteSection")

  const tabs: { tab: string, content: string }[] = [
    {
      tab: t('AboutFrame.header'),
      content: t('AboutFrame.body')
    },
    {
      tab: t('AboutColors.header'),
      content: t('AboutColors.body')
    },
    {
      tab: t('AboutImages.header'),
      content: t('AboutImages.body')
    }
  ]

  return (
    <div className='flex-grow'>
      <FadeCarousel tabs={tabs} />
    </div>
  );
}