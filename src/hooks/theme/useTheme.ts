export default function useTheme(): { getTheme: () => string, setTheme: (theme: string) => void } {
  const getTheme = (): string => {
    const html = document.documentElement;
    return html.getAttribute('data-theme') ?? '';
  }

  const setTheme = (theme: string) => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
  }

  return { getTheme, setTheme }
}