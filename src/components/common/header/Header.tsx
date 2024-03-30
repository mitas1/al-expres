import { useLocale, useTranslations } from 'next-intl';

import AlExpresLogo from '@/images/al-expres.svg';
import { ScrollButton } from '@/scroll';
import { LanguageSelector } from '../language-selector/LanguageSelectorButton';
import { Locale } from '@/i18n';
import { FC, PropsWithChildren } from 'react';

const navProps = { className: 'hidden md:flex text-white text-sm p-2' };

export const Header = () => {
  const t = useTranslations('Common');
  const selectedLocale = useLocale() as Locale;

  const languageTranslations = { en: t('en'), de: t('de'), sk: t('sk') };

  return (
    <header className="p-4 h-20 flex items-center justify-center backdrop-blur-sm bg-black/80 fixed top-0 right-0 left-0 z-30">
      <div className="max-w-6xl w-full flex justify-between">
        <AlExpresLogo />
        <div className="flex items-center gap-6">
          <ScrollButton to="semitrailers" {...navProps}>
            {t('nav.semitrailerTypes')}
          </ScrollButton>
          <ScrollButton to="dispatchers" {...navProps}>
            {t('nav.dispatchers')}
          </ScrollButton>
          <ScrollButton to="customers" {...navProps}>
            {t('nav.customers')}
          </ScrollButton>
          <ScrollButton
            to="dispatchers"
            className="bg-accent py-3 px-6 rounded text-white text-sm active:opacity-90"
          >
            {t('contactUs')}
          </ScrollButton>
          <LanguageSelector
            selectedLocale={selectedLocale}
            languageTranslations={languageTranslations}
          >
            {t('selectYourLanguage')}
          </LanguageSelector>
        </div>
      </div>
    </header>
  );
};
