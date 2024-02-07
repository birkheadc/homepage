import PixelatedImage from '@/components/pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '@/types/image/imageProcessShaderMode';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import ContactForm from './form/ContactForm';

interface ContactSectionProps {

}

export default function ContactSection(props: ContactSectionProps): JSX.Element {

  const t = useTranslations('ContactSection');

  return (
    <div className='relative w-full h-full'>
      <div className='flex flex-col short:flex-row short:items-stretch items-center justify-start h-full gap-6 p-2 px-4 m-auto w-full'>
        <div className='flex flex-col items-center justify-center gap-1'>
          <h2 className='text-3xl text-center lg:text-5xl'>
            {t.rich('header', {
              em: inner => <span className='text-primary-0'>{inner}</span>
            })}
          </h2>
          <a className='text-xl underline text-primary-0 hover:text-primary-1 lg:text-2xl' draggable='false' href={'mailto:birkheadc@gmail.com'} >birkheadc@gmail.com</a>
          <ul className='flex flex-row gap-2'>
            <li><a draggable='false' href={'https://www.linkedin.com/in/colby-birkhead'} target='_blank' rel='noreferrer'><PixelatedImage className='w-12 h-12 transition-all rounded-md hover:bg-primary-0' img={'/devicons/linkedin-original.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} /></a></li>
            <li><a draggable='false' href={'https://github.com/birkheadc'} target='_blank' rel='noreferrer'><PixelatedImage className='w-12 h-12 transition-all rounded-full hover:bg-primary-0' img={'/devicons/github-original.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} /></a></li>
            <li><a draggable='false' href={'https://www.facebook.com/#!/profile.php?id=100000139877934'} target='_blank' rel='noreferrer'><PixelatedImage className='w-12 h-12 transition-all rounded-md hover:bg-primary-0' img={'/devicons/facebook-original.png'} shaderMode={ImageProcessShaderMode.NORMAL} pixelLevel={1} /></a></li>
          </ul>
          <p className='max-w-3xl text-xl text-justify lg:text-2xl'>
            {t.rich('leave-a-comment', {
              em: inner => <span className='text-primary-0'>{inner}</span>
            })}
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}