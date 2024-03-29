import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

interface CircleIconProps {
  className?: string;
}

export const CircleIcon: FC<PropsWithChildren<CircleIconProps>> = ({
  className,
  children,
}) => (
  <div className={classNames('border-full rounded-full border p-4', className)}>
    {children}
  </div>
);
