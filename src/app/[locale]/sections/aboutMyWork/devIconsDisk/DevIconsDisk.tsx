import * as React from 'react';
import Disk from '../../../../../components/disk/Disk';
import PixelatedImage from '../../../../../components/pixelatedImage/PixelatedImage';
import { ImageProcessShaderMode } from '../../../../../types/image/imageProcessShaderMode';


type DevIconsDiskProps = {

}

export default function DevIconsDisk(props: DevIconsDiskProps): JSX.Element {

  const icons = getShuffledIcons();

  return (
    <Disk innerClassname='w-[100lvw] h-[100lvw] short:w-[100svh] short:h-[100svh] lg:w-[60svh] lg:h-[60svh]'>
      {icons.map(
        icon =>
        <PixelatedImage key={`pixelated-image-key-${icon}`} img={`/devicons/${icon}.png`} shaderMode={ImageProcessShaderMode.DARK} pixelLevel={1} />
      )}
    </Disk>
  );
}

const ICONS: string[] = [
  'amazonwebservices-original',
  'angularjs-plain',
  'babel-original',
  'bash-original',
  'blender-original',
  'csharp-plain',
  'css3-plain',
  'docker-original',
  'dotnetcore-original',
  'git-original',
  'html5-plain',
  'java-original',
  'javascript-plain',
  'jest-plain',
  'linux-original',
  'mongodb-original',
  'mysql-original',
  'nginx-original',
  'nodejs-original',
  'npm-original-wordmark',
  'postgresql-plain',
  'python-original',
  'rails-plain',
  'ruby-original',
  'spring-original',
  'sqlite-plain',
  'ssh-original',
  'typescript-plain',
  'unity-original',
  'unrealengine-original',
  'webpack-original',
  'wordpress-plain'
];

function getShuffledIcons(): string[] {
  const indexes: number[] = Array.from(ICONS, (v, k) => k);
  const shuffled: string[] = [];

  while (indexes.length > 0) {
    const index = indexes.splice(Math.floor(Math.random()*indexes.length ),1)[0];
    shuffled.push(ICONS[index]);
  }

  return shuffled;
}