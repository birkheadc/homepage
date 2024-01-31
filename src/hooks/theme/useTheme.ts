export default function useTheme(): { getTheme: () => string, getThemeColors: () => string[], setTheme: (theme: string) => void } {
  const getTheme = (): string => {
    const html = document.documentElement;
    return html.getAttribute('data-theme') ?? '';
  }

  const setTheme = (theme: string) => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    window.dispatchEvent(new Event('onchangetheme'));
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

  return { getTheme, getThemeColors, setTheme }
}