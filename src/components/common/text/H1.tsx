import classNames from 'classnames';
import { ComponentProps, FC } from 'react';

export const H1: FC<ComponentProps<'h1'>> = ({ className, ...props }) => (
  <h1
    className={classNames('text-center text-4xl uppercase', className)}
    {...props}
  />
);
