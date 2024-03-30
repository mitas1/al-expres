import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { DescriptionList } from '../common/description-list/DescriptionList';
import { Section } from '../common/layout/Section';
import { Flex } from '../common/layout/Flex';

import Frigo from '@/images/semitrailer-frigo.svg';
import Tent from '@/images/semitrailer-tent.svg';
import { CircleIcon } from '../common/CircleIcon';
import { ScrollButton } from '@/scroll';

const Paragraph: FC<PropsWithChildren> = ({ children }) => <p>{children}</p>;

const H2: FC<PropsWithChildren> = ({ children }) => (
  <h2 className="text-3xl text-accent">{children}</h2>
);

const InfoButton: FC<PropsWithChildren> = () => {
  const t = useTranslations('Common');
  return (
    <ScrollButton
      to="dispatchers"
      className="bg-accent text-white rounded px-10 py-3"
    >
      {t('moreInfo')}
    </ScrollButton>
  );
};

const Column: FC<PropsWithChildren & { icon: ReactNode }> = ({
  icon,
  children,
}) => (
  <div className="flex-1 flex flex-col md:flex-row items-center md:items-start">
    <div className="m-8">
      <CircleIcon className="border-accent p-6">{icon}</CircleIcon>
    </div>
    <div className="leading-loose text-sm gap-y-4 flex flex-col items-center md:items-start text-center md:text-left">
      {children}
    </div>
  </div>
);

export const SemitrailerTypes = () => {
  const t = useTranslations('SemitrailerTypes');

  return (
    <Section heading={t('title')} className="bg-white">
      <Flex>
        <Column icon={<Frigo width="50px" className="text-gray-500" />}>
          <H2>{t('frigo.title')}</H2>
          <Paragraph>
            {t.rich('frigo.paragraph1', {
              bold: (chunks) => <strong>{chunks}</strong>,
            })}
          </Paragraph>
          <Paragraph>
            {t.rich('frigo.paragraph2', {
              bold: (chunks) => <strong>{chunks}</strong>,
            })}
          </Paragraph>
          <DescriptionList
            groups={(
              [
                ['type', 'load', 'volume'],
                ['dimensions', 'palettes'],
                ['gps', 'frc'],
              ] as const
            ).map((group) =>
              group.map((key) => [
                t(`frigo.params.${key}.label`),
                t.rich(`frigo.params.${key}.value`, {
                  sup: (chunks) => <sup>{chunks}</sup>,
                }),
              ]),
            )}
          />
          <InfoButton />
        </Column>
        <Column icon={<Tent width="50px" className="text-gray-500" />}>
          <H2>{t('tent.title')}</H2>
          <Paragraph>
            {t.rich('tent.paragraph1', {
              bold: (chunks) => <strong>{chunks}</strong>,
            })}
          </Paragraph>
          <Paragraph>
            {t.rich('tent.paragraph2', {
              bold: (chunks) => <strong>{chunks}</strong>,
            })}
          </Paragraph>
          <DescriptionList
            groups={(
              [
                ['type', 'load'],
                ['volume', 'dimensions'],
                ['palettes', 'gps'],
                ['xlCode', 'multiLock'],
              ] as const
            ).map((group) =>
              group.map((key) => [
                t(`tent.params.${key}.label`),
                t.rich(`tent.params.${key}.value`, {
                  sup: (chunks) => <sup>{chunks}</sup>,
                }),
              ]),
            )}
          />
          <InfoButton />
        </Column>
      </Flex>
    </Section>
  );
};
