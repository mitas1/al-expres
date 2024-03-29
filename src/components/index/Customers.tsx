import { useTranslations } from 'next-intl';
import { Section } from '../common/layout/Section';
import { Flex } from '../common/layout/Flex';

export const Customers = () => {
  const t = useTranslations('Customers');
  return (
    <Section heading={t('title')} className="bg-accent">
      <Flex>
        <p>Image</p>
        <p>Image</p>
        <p>Image</p>
      </Flex>
    </Section>
  );
};
