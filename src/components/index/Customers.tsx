import { useTranslations } from 'next-intl';
import { Section } from '../common/layout/Section';
import { Flex } from '../common/layout/Flex';

import SamsungLogo from '@/images/samsung.svg';
import ZottLogo from '@/images/zott.svg';
import MeggleLogo from '@/images/meggle.svg';
import RajoLogo from '@/images/rajo.svg';
import VolkswagenLogo from '@/images/volkswagen.svg';

export const Customers = () => {
  const t = useTranslations('Customers');
  return (
    <Section heading={t('title')} className="bg-accent">
      <Flex>
        <SamsungLogo width="100%" className="max-w-40" />
        <ZottLogo width="100%" className="max-w-40" />
        <MeggleLogo width="100%" className="max-w-40" />
        <RajoLogo width="100%" className="max-w-40" />
        <VolkswagenLogo width="100%" className="max-w-40" />
      </Flex>
    </Section>
  );
};
