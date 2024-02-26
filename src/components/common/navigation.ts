import { I18nConfig } from '@/i18n';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(I18nConfig);
