import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ScrollButton } from '@/scroll';

import truckImage from '/public/truck.jpeg';

export const TruckHeroBanner = () => {
  const t = useTranslations('TruckHeroBanner');
  return (
    <section className="w-full relative h-[700px] flex justify-center items-center text-center md:text-left">
      <Image
        src={truckImage}
        alt="Truck"
        placeholder="blur"
        quality={100}
        sizes="200vw"
        fill
        priority
        className="object-cover"
      />
      <div className="z-20 max-w-6xl w-full p-10">
        <h1 className="text-white text-5xl md:max-w-sm text-left">
          {t('title')}
        </h1>
        <ScrollButton
          to="dispatchers"
          className="bg-black mt-8 inline-block text-white py-4 px-8 rounded hover:bg-white hover:text-black"
        >
          {t('contactLink')}
        </ScrollButton>
      </div>
    </section>
  );
};
