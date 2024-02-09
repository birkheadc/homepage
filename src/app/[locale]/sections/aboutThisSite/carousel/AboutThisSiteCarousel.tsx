import * as React from 'react';
import FadeCarousel from '../../../../../components/fadeCarousel/FadeCarousel';
import { useTranslations } from 'next-intl';

type AboutThisSiteCarouselProps = {

}

export default function AboutThisSiteCarousel(props: AboutThisSiteCarouselProps): JSX.Element {

  const t = useTranslations("AboutThisSiteSection")

  return (
    <div className='flex-grow'>
      <FadeCarousel>
        <div>
          <h3 className='text-3xl lg:text-5xl bg-primary-1 text-primary-3 p-1 px-3'>
            {t('AboutFrame.header')}
          </h3>
          <p>
            {t('AboutFrame.body')}
          </p>
        </div>
        <div>
        <h3 className='text-3xl lg:text-5xl bg-primary-1 text-primary-3 p-1 px-3'>
            {t('AboutColors.header')}
          </h3>
          <p>
            {t('AboutColors.body')}
          </p>
        </div>
        <div>
        <h3 className='text-3xl lg:text-5xl bg-primary-1 text-primary-3 p-1 px-3'>
            {t('AboutImages.header')}
          </h3>
          <p>
            {t('AboutImages.body')}
          </p>
        </div>
      </FadeCarousel>
    </div>
  );
}