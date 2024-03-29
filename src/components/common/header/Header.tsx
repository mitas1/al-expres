import Image from 'next/image';
import { Link } from '../navigation';
import { I18nConfig } from '@/i18n';
import { useLocale } from 'next-intl';

export const Header = () => {
  const selectedLocale = useLocale();
  return (
    <header className="p-4 h-20 flex items-center justify-center backdrop-blur-sm bg-black/80 fixed top-0 right-0 left-0 z-30">
      <div className="max-w-6xl w-full flex justify-between">
        <Image
          src="/al-expres.svg"
          alt="Vercel Logo"
          width={90}
          height={36}
          priority
        />
        <div>
          {I18nConfig.locales.map((locale) => (
            <Link
              href="/"
              locale={locale}
              className={[
                'uppercase text-white/75 inline-flex p-2 text-sm',
                selectedLocale === locale && '!text-white',
              ].join(' ')}
              key={locale}
            >
              {locale}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
