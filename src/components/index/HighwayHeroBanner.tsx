import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const HighwayHeroBanner = () => {
  const t = useTranslations('HighwayHeroBanner');
  return (
    <section className="w-full relative h-[700px] flex justify-center items-center md:text-left">
      <Image
        src="/highway.jpeg"
        alt="Highway"
        fill
        priority
        className="object-cover"
      />
      <div className="z-20 p-10 text-center text-white">
        <h1 className="text-5xl md:max-w-xl uppercase my-6">
          {t.rich('title', {
            accent: (chunks) => <span className="text-accent">{chunks}</span>,
          })}
        </h1>
        <span className=" my-6">{t('footnote')}</span>
      </div>
    </section>
  );
};
