import { Contact } from '@/components/index/Contact';
import { Customers } from '@/components/index/Customers';
import { Dispatchers } from '@/components/index/Dispatchers';
import { HighwayHeroBanner } from '@/components/index/HighwayHeroBanner';
import { SemitrailerTypes } from '@/components/index/SemitrailerTypes';
import { TruckHeroBanner } from '@/components/index/TruckHeroBanner';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FC } from 'react';
import { PageParams } from './layout';

const IndexPage: FC<PageParams> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <TruckHeroBanner />
      <SemitrailerTypes />
      <HighwayHeroBanner />
      <Dispatchers />
      <Customers />
      <Contact />
    </>
  );
};
export default IndexPage;
