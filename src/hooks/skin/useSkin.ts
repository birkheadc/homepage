'use client';

import * as React from 'react';
import { FrameColor } from '../../types/frameColor/frameColor';

export default function useSkin(): { skin: FrameColor, changeSkin: (skin: FrameColor) => void } {
  const [ skin, setSkin ] = React.useState<FrameColor>(FrameColor.NEUTRAL);

  React.useEffect(function retrieveLocalSettings() {
    const skin = localStorage.getItem(SKIN_KEY);
    if (skin) changeSkin(skin as FrameColor);
  }, []);

  React.useEffect(function setListeners() {
    const listener = () => {
      const newSkin = document.documentElement.getAttribute(SKIN_KEY);
      if (newSkin && newSkin !== skin) {
        setSkin(newSkin as FrameColor)
      }
    }
    window.addEventListener('changeskin', listener);
    return (() => {
      window.removeEventListener('changeskin', listener)
    })
  }, [ skin ])

  React.useEffect(function dispatchEventOnSkinChange() {
    window.dispatchEvent(new Event('changeskin'));
  }, [ skin ])

  const changeSkin = (skin: FrameColor) => {
    localStorage.setItem(SKIN_KEY, skin);
    document.documentElement.setAttribute(SKIN_KEY, skin);
    setSkin(skin);
  }

  return { skin, changeSkin };
}

const SKIN_KEY = 'skin';