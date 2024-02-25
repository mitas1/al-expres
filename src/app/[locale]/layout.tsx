import { Inter } from 'next/font/google';
import '../globals.css';
import { FC, PropsWithChildren } from 'react';
import { LOCALES, Locale } from '@/i18n';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'] });

interface PageParams {
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

export const generateStaticParams = () => LOCALES.map((locale) => ({ locale }));
