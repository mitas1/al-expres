import createMiddleware from 'next-intl/middleware';
import { DEFAULT_LOCALE, LOCALES } from './i18n';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed' // Do not include locale prefix for the default locale
});

export const config = {
  matcher: ['/', `/(sk|en)/:path*`] // Can't contain a dynamic expression: https://nextjs.org/docs/messages/invalid-page-config
};
