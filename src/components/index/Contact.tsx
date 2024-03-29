import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Section } from '../common/layout/Section';
import { Flex } from '../common/layout/Flex';
export const Contact: FC = () => {
  const t = useTranslations('Contact');
  return (
    <Section
      className="text-white bg-[url('/europe.jpeg')] bg-center bg-cover bg-no-repeat"
      heading={t('title')}
    >
      <Flex>
        <p>Image</p>
        <p>Image</p>
        <p>Image</p>
      </Flex>
      <p>Contact</p>
    </Section>
  );
};
