'use client';

import { FC, PropsWithChildren, cloneElement, useContext } from 'react';
import { ScrollContext } from './ScrollContext';

export const ScrollSection: FC<PropsWithChildren<{ id: string }>> = ({
    id,
  ...props
}) => {
  const scrollRefs = useContext(ScrollContext);
  return (
    <div
      ref={(node) => {
        if (node != null) {
          scrollRefs.set(id, node);
        } else {
          scrollRefs.delete(id);
        }
      }}
      {...props}
    />
  );
};
