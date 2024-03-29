import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

interface FlexProps {
  className?: string;
}

export const Flex: FC<PropsWithChildren<FlexProps>> = ({
  className,
  children,
}) => (
  <div
    className={classNames(
      'flex flex-col md:flex-row justify-between items-center md:items-start gap-14 p-8',
      className,
    )}
  >
    {children}
  </div>
);
