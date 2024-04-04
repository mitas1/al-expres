import { Contact } from '@/components/index/Contact';
import { Customers } from '@/components/index/Customers';
import { Dispatchers } from '@/components/index/Dispatchers';
import { HighwayHeroBanner } from '@/components/index/HighwayHeroBanner';
import { SemitrailerTypes } from '@/components/index/SemitrailerTypes';
import { TruckHeroBanner } from '@/components/index/TruckHeroBanner';
import { unstable_setRequestLocale } from 'next-intl/server';
import { FC } from 'react';
import { PageParams } from './layout';
import { ScrollSection } from '@/scroll/ScrollSection';
import { PhotoWall } from '@/components/index/PhotoWall';

const IndexPage: FC<PageParams> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <ScrollSection id="home">
        <TruckHeroBanner />
      </ScrollSection>
      <ScrollSection id="semitrailers">
        <SemitrailerTypes />
      </ScrollSection>
      <HighwayHeroBanner />
      <ScrollSection id="dispatchers">
        <Dispatchers />
      </ScrollSection>
      <ScrollSection id="customers">
        <Customers />
        <PhotoWall />
      </ScrollSection>
      <ScrollSection id="contact">
        <Contact />
      </ScrollSection>
    </>
  );
};
export default IndexPage;
