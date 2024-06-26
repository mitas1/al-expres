import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { H1 } from '../common/text/H1';

import highwayImage from '/public/highway.jpeg';

export const HighwayHeroBanner = () => {
  const t = useTranslations('HighwayHeroBanner');
  return (
    <section className="w-full relative h-[700px] flex justify-center items-center md:text-left">
      <Image
        src={highwayImage}
        alt="Highway"
        placeholder="blur"
        sizes="200vw"
        fill
        className="object-cover"
      />
      <div className="z-20 p-10 text-center text-white">
        <H1 className="md:max-w-xl my-6">
          {t.rich('title', {
            accent: (chunks) => <span className="text-accent">{chunks}</span>,
          })}
        </H1>
        <span className=" my-6">{t('footnote')}</span>
      </div>
    </section>
  );
};
