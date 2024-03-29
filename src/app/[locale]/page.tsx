import { Contact } from '@/components/index/Contact';
import { Customers } from '@/components/index/Customers';
import { Dispatchers } from '@/components/index/Dispatchers';
import { HighwayHeroBanner } from '@/components/index/HighwayHeroBanner';
import { SemitrailerTypes } from '@/components/index/SemitrailerTypes';
import { TruckHeroBanner } from '@/components/index/TruckHeroBanner';

const Index = () => (
  <>
    <TruckHeroBanner />
    <SemitrailerTypes />
    <HighwayHeroBanner />
    <Dispatchers />
    <Customers />
    <Contact />
  </>
);

export default Index;
