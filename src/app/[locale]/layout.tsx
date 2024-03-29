import { Exo_2 } from 'next/font/google';
import '../globals.css';
import { FC, PropsWithChildren } from 'react';
import { I18nConfig, Locale } from '@/i18n';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/common/header/Header';

const exo2 = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '700'],
  variable: '--font-exo',
});

export interface PageParams {
  params: { locale: Locale };
}

export const generateMetadata = async ({ params: { locale } }: PageParams) => {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
};

const RootLayout: FC<PropsWithChildren<PageParams>> = ({
  children,
  params: { locale },
}) => {
  unstable_setRequestLocale(locale); // Temporary workaround

  return (
    <html lang={locale}>
      <body className={exo2.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

export const generateStaticParams = () =>
  I18nConfig.locales.map((locale) => ({ locale }));
