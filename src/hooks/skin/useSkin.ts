'use client';

import * as React from 'react';
import { FrameColor } from '../../types/frameColor/frameColor';

export default function useSkin(): { skin: FrameColor, changeSkin: (skin: FrameColor) => void, skinStyle: string } {
  const [ skin, setSkin ] = React.useState<FrameColor>(FrameColor.GRAY);
  const skinStyle = SKIN_STYLES[skin];

  React.useEffect(function retrieveLocalSettings() {
    const skin = localStorage.getItem(SKIN_KEY);
    if (skin) changeSkin(skin as FrameColor);
  }, []);

  const changeSkin = (skin: FrameColor) => {
    localStorage.setItem(SKIN_KEY, skin);
    setSkin(skin);
  }

  return { skin, changeSkin, skinStyle };
}

const SKIN_STYLES: { [key: string]: string } = {
  neutral: 'from-neutral-300 to-neutral-500 border-neutral-900 border-t-neutral-600 border-l-neutral-600',
  berry: 'from-berry-300 to-berry-500 border-berry-900 border-t-berry-600 border-l-berry-600',
  grape: 'from-grape-300 to-grape-500 border-grape-900 border-t-grape-600 border-l-grape-600',
  kiwi: 'from-kiwi-300 to-kiwi-500 border-kiwi-900 border-t-kiwi-600 border-l-kiwi-600',
  dandelion: 'from-dandelion-300 to-dandelion-500 border-dandelion-900 border-t-dandelion-600 border-l-dandelion-600',
  teal: 'from-teal-300 to-teal-500 border-teal-900 border-t-teal-600 border-l-teal-600'
}

const SKIN_KEY = 'skin';