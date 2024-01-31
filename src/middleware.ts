import createMiddleware from "next-intl/middleware";

console.log('m');

export default createMiddleware({
  locales: [ 'en', 'jp' ],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(en|jp)/:path*']
}