import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const I18nConfig = {
  locales: ['sk', 'en', 'de'],
  defaultLocale: 'sk',
  localePrefix: 'as-needed',
} as const;

const localeExists = (locale: string) =>
  (I18nConfig.locales as ReadonlyArray<string>).includes(locale);

export type Locale = (typeof I18nConfig.locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!localeExists(locale)) {
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
