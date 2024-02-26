import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const HeroBanner = () => {
  const t = useTranslations('Index');
  return (
    <section className="w-full relative h-[700px] flex justify-center items-center text-center md:text-left">
      <Image
        src="/truck-1.jpeg"
        alt="Truck"
        fill
        priority
        className="object-cover"
      />
      <div className="z-20 max-w-6xl w-full p-10">
        <h1 className="text-5xl text-white md:max-w-sm uppercase">{t('title')}</h1>
        <a
          href="#id"
          className="bg-black mt-8 inline-block text-white py-4 px-8 rounded hover:bg-white hover:text-black"
        >
          Kontaktujte nasich dispecerov
        </a>
      </div>
    </section>
  );
};
