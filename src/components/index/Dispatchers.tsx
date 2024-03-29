import { useMessages, useTranslations } from 'next-intl';
import { Section } from '../common/layout/Section';
import { Flex } from '../common/layout/Flex';

import PhoneIcon from '@/images/phone.svg';
import { CircleIcon } from '../common/CircleIcon';

const TRANS_NAMESPACE = 'Dispatchers' as const;

type Dispatchers = keyof IntlMessages[typeof TRANS_NAMESPACE];

export const Dispatchers = () => {
  const tCommon = useTranslations('Common');
  const t = useTranslations(TRANS_NAMESPACE);
  const messages = useMessages();
  return (
    <Section heading={tCommon('dispatchers')} className="bg-white">
      <Flex>
        {(Object.keys(messages[TRANS_NAMESPACE]) as Dispatchers[]).map(
          (transKey) => {
            const email = t(`${transKey}.email`);
            const phone = t(`${transKey}.phone`);
            return (
              <div
                key={email}
                className="flex-1 flex items-center flex-col justify-center text-center gap-4"
              >
                <CircleIcon className='border-accent'>
                  <PhoneIcon />
                </CircleIcon>
                <div>
                  <h2 className="text-3xl text-accent">{t(`${transKey}.name`)}</h2>
                  <span>{t(`${transKey}.position`)}</span>
                </div>
                <dl>
                  <div className="flex justify-center">
                    <dt className="after:content-[':'] after:pr-1">
                      {tCommon('email')}
                    </dt>
                    <dd>
                      <a href={`mailto:${email}`}>{email}</a>
                    </dd>
                  </div>
                  <div className="flex justify-center">
                    <dt className="after:content-[':'] after:pr-1">
                      {tCommon('phone')}
                    </dt>
                    <dd>
                      <a href={`tel:${phone}`}>{phone}</a>
                    </dd>
                  </div>
                </dl>
              </div>
            );
          },
        )}
      </Flex>
    </Section>
  );
};
