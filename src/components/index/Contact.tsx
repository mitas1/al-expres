import { useTranslations } from 'next-intl';
import { FC, ReactNode } from 'react';
import { Section } from '../common/layout/Section';
import { Flex } from '../common/layout/Flex';

import LocationIcon from '@/images/location.svg';
import InfoIcon from '@/images/info.svg';
import MailIcon from '@/images/mail.svg';
import PhoneIcon from '@/images/phone.svg';
import { CircleIcon } from '../common/CircleIcon';

interface ItemProps {
  icon?: ReactNode;
  title: string;
  description: ReactNode;
}

const Item: FC<ItemProps> = ({ title, icon, description }) => (
  <div className="flex flex-col items-center text-center gap-2">
    <CircleIcon className="border-white">{icon}</CircleIcon>
    <p className="font-bold">{title}</p>
    <p className="text-gray-400">{description}</p>
  </div>
);

export const Contact: FC = () => {
  const t = useTranslations('Contact');

  return (
    <Section
      className="text-white bg-[url('/europe.jpeg')] bg-center bg-cover bg-no-repeat"
      heading={t('title')}
    >
      <Flex>
        <Item
          icon={<LocationIcon />}
          title={t('company.label')}
          description={t.rich('company.value', { br: () => <br /> })}
        />
        <Item
          icon={<InfoIcon />}
          title={t('ico.label')}
          description={t('ico.value')}
        />
        <Item
          icon={<MailIcon />}
          title={t('email.label')}
          description={
            <a href={`mailto:${t('email.value')}`}>{t('email.value')}</a>
          }
        />
        <Item
          icon={<PhoneIcon />}
          title={t('phone.label')}
          description={
            <a href={`tel:${t('phone.value')}`}>{t('phone.value')}</a>
          }
        />
      </Flex>
      <p className="text-center text-xs text-gray-500 mt-20">
        {t('copyright', { year: new Date().getFullYear() })}
      </p>
    </Section>
  );
};
