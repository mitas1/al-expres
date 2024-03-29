import classNames from 'classnames';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { H1 } from '../text/H1';

interface SectionProps {
  heading: ReactNode;
  className?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  heading,
  children,
}) => (
  <section className={classNames('w-full overflow-hidden py-40', className)}>
    <H1 className="mb-20">{heading}</H1>
    <div className="max-w-6xl w-full m-auto">{children}</div>
  </section>
);
