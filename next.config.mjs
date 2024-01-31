import createnextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createnextIntlPlugin('./src/i18n/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
