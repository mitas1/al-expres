'use client';

import { I18nConfig, Locale } from '@/i18n';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { usePathname, useRouter } from '../navigation';

import SkIcon from '@/images/sk.svg';
import GbIcon from '@/images/gb.svg';
import DeIcon from '@/images/de.svg';
import classNames from 'classnames';

interface LanguageSelectorProps {
  selectedLocale: Locale;
  languageTranslations: Record<Locale, string>;
}

const LanguageIcons: Record<Locale, ReactNode> = {
  sk: <SkIcon />,
  en: <GbIcon />,
  de: <DeIcon />,
};

const renderLanguageIcon = (locale: Locale) => (
  <span className="rounded-full overflow-hidden w-6 h-6 border">
    {LanguageIcons[locale]}
  </span>
);

export const LanguageSelector: FC<PropsWithChildren<LanguageSelectorProps>> = ({
  selectedLocale,
  languageTranslations,
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="flex gap-2 items-center justify-center p-2 text-sm text-white outline-accent"
        >
          {renderLanguageIcon(selectedLocale)}
          <span className="hidden md:block">
            {languageTranslations[selectedLocale]}
          </span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white z-30 p-4 rounded shadow mx-4">
          <DropdownMenu.Label className="text-xs text-center">
            {children}
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup
            value={selectedLocale}
            onValueChange={handleLocaleChange}
            className="mt-3"
          >
            {I18nConfig.locales.map((locale) => (
              <DropdownMenu.RadioItem
                key={locale}
                value={locale}
                className={classNames(
                  'pr-24 pl-4 text-xs items-center py-2 flex gap-2 rounded cursor-pointer outline-none focus:hover:bg-gray-50 focus:hover:border-gray-100 border border-white',
                  locale === selectedLocale && 'bg-gray-50 border-gray-100',
                )}
              >
                {renderLanguageIcon(locale)}
                {languageTranslations[locale]}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
