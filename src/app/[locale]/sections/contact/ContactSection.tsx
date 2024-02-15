import PixelatedImage from '@/components/pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '@/types/image/imageProcessShaderMode';
import * as React from 'react';
import ContactForm from './form/ContactForm';
import ResumeLink from './resumeLink/ResumeLink';
import useRichTranslations from '../../../../hooks/useRichTranslations/useRichTranslations';

interface ContactSectionProps {

}

export default function ContactSection(props: ContactSectionProps): JSX.Element {

  const t = useRichTranslations('ContactSection');

  return (
    <div className='relative w-full h-[80svh]'>
      <div className='flex flex-col items-center justify-start w-full h-full gap-6 p-2 px-4 m-auto short:flex-row short:items-stretch'>
        <div className='flex flex-col items-center justify-center gap-1'>
          <h2 className='text-3xl text-center lg:text-5xl'>
            {t('header')}
          </h2>
          <a className='text-xl underline text-primary-0 hocus:text-primary-1 lg:text-2xl' draggable='false' href={'mailto:birkheadc@gmail.com'} >birkheadc@gmail.com</a>
          <ul className='flex flex-row gap-2'>
            <li className='p-0.5 rounded-md hocus-within:bg-primary-0'><a draggable='false' href={'https://www.linkedin.com/in/colby-birkhead'} target='_blank' rel='noreferrer'><PixelatedImage className='w-12 h-12 ' img={'/devicons/linkedin-original.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={2} /></a></li>
            <li className='p-0.5 rounded-full hocus-within:bg-primary-0'><a draggable='false' href={'https://github.com/birkheadc'} target='_blank' rel='noreferrer'><PixelatedImage className='w-12 h-12' img={'/devicons/github-original.png'} shaderMode={ImageProcessShaderMode.LIGHT} pixelLevel={2} /></a></li>
            <li className='p-0.5 rounded-md hocus-within:bg-primary-0'><a draggable='false' href={'https://www.facebook.com/#!/profile.php?id=100000139877934'} target='_blank' rel='noreferrer'><PixelatedImage className='w-12 h-12' img={'/devicons/facebook-original.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={2} /></a></li>
            <li className='p-0.5 rounded-md hocus-within:bg-primary-0'><a draggable='false' href={'https://birkheadc.itch.io/'} target='_blank' rel='noreferrer'><PixelatedImage className='w-12 h-12' img={'/devicons/itchio.png'} shaderMode={ImageProcessShaderMode.DARK} pixelLevel={2} /></a></li>
          </ul>
          <ResumeLink className='text-xl underline text-primary-0 hocus:text-primary-1 lg:text-2xl' text={t('view-resume')} />
          <p className='max-w-3xl text-xl text-justify lg:text-2xl'>
            {t('leave-a-comment')}
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}