'use client';

import * as React from 'react';

export default function useTheme(): { theme: string, getThemeColors: () => string[], changeTheme: (theme: string) => void } {

  const [ theme, setTheme ] = React.useState<string>('');

  React.useEffect(function retrieveLocalSettings() {
    const theme = localStorage.getItem(THEME_KEY);
    if (theme && VALID_THEMES.includes(theme)) changeTheme(theme);
  }, []);

  const changeTheme = (theme: string) => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    window.dispatchEvent(new Event('onchangetheme'));
    localStorage.setItem(THEME_KEY, theme);
    setTheme(theme);
  }

  const getThemeColors = (): string[] => {
    const html = document.documentElement;
    const style = getComputedStyle(html);
    const colors: string[] = [];
  
    colors.push(style.getPropertyValue('--twc-primary-0'));
    colors.push(style.getPropertyValue('--twc-primary-1'));
    colors.push(style.getPropertyValue('--twc-primary-2'));
    colors.push(style.getPropertyValue('--twc-primary-3'));
  
    return colors;
  }

  return { theme, getThemeColors, changeTheme }
}

const THEME_KEY = 'theme';

const VALID_THEMES = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm'
];