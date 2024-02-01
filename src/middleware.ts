import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from './navigation/navigation';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|jp)/:path*']
}