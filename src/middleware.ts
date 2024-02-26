import createMiddleware from 'next-intl/middleware';
import { I18nConfig } from './i18n';

export default createMiddleware(I18nConfig);

export const config = {
  matcher: ['/', `/(sk|en)/:path*`], // Can't contain a dynamic expression: https://nextjs.org/docs/messages/invalid-page-config
};
