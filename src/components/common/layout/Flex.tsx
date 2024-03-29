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
      'flex flex-col md:flex-row justify-between',
      className,
    )}
  >
    {children}
  </div>
);
