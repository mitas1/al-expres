import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const LOCALES = ['sk', 'en'] as const;
export const DEFAULT_LOCALE = LOCALES[0];

const localeExists = (locale: string) => (LOCALES as ReadonlyArray<string>).includes(locale);

export type Locale = typeof LOCALES[number];

export default getRequestConfig(async ({ locale }) => {
  if (!localeExists(locale)) {
    notFound();
  };

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
