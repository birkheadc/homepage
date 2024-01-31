'use client';

import * as React from 'react';
import { FrameColor } from '../../types/frameColor/frameColor';

export default function useSkin(): { skin: FrameColor, changeSkin: (skin: FrameColor) => void } {
  const [ skin, setSkin ] = React.useState<FrameColor>(FrameColor.GRAY);

  React.useEffect(function retrieveLocalSettings() {
    const skin = localStorage.getItem(SKIN_KEY);
    if (skin) changeSkin(skin as FrameColor);
  }, []);

  const changeSkin = (skin: FrameColor) => {
    localStorage.setItem(SKIN_KEY, skin);
    setSkin(skin);
  }

  return { skin, changeSkin };
}

const SKIN_KEY = 'skin';