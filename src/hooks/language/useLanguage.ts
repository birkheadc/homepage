export default function useLanguage(): string {
  const html = document.documentElement;
  return html.getAttribute('lang') ?? 'en';
}