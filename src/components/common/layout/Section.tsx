import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { H1 } from '../text/H1';

interface SectionProps {
  heading: string;
  className?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  heading,
  children,
}) => (
  <section className={classNames('w-full overflow-hidden py-24', className)}>
    <H1 className="my-10">{heading}</H1>
    <div className="max-w-6xl w-full m-auto">{children}</div>
  </section>
);
