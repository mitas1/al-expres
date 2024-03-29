import { useTranslations } from 'next-intl';
import { Section } from '../common/layout/Section';
import { Flex } from '../common/layout/Flex';

import SamsungLogo from '@/images/samsung.svg';
import ZottLogo from '@/images/zott.svg';
import MeggleLogo from '@/images/meggle.svg';
import RajoLogo from '@/images/rajo.svg';
import VolkswagenLogo from '@/images/volkswagen.svg';

const commonProps = { className: 'max-w-40 w-full' };

export const Customers = () => {
  const t = useTranslations('Customers');
  return (
    <Section heading={t('title')} className="bg-accent text-accent-dark">
      <Flex>
        <SamsungLogo {...commonProps} />
        <ZottLogo {...commonProps} />
        <MeggleLogo {...commonProps} />
        <RajoLogo {...commonProps} />
        <VolkswagenLogo {...commonProps} />
      </Flex>
    </Section>
  );
};
