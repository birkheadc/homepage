export default function useLanguage(): string | undefined {
  if (typeof window === "undefined") return '';
  const html = document.documentElement;
  return html.getAttribute('lang') ?? 'en';
}