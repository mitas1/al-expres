'use client';

import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { ScrollContext } from './ScrollContext';

export const ScrollProvider: FC<PropsWithChildren> = (props) => (
  <ScrollContext.Provider value={new Map()} {...props} />
);
