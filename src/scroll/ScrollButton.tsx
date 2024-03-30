'use client';

import { ComponentProps, FC, useContext } from 'react';
import { ScrollContext } from './ScrollContext';

export const ScrollButton: FC<ComponentProps<'button'> & { to: string }> = ({
  to,
  ...props
}) => {
  const scrollRefs = useContext(ScrollContext);
  return (
    <button
      {...props}
      type="button"
      onClick={() => scrollRefs.get(to)?.scrollIntoView({ behavior: 'smooth' })}
    />
  );
};
