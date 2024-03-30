"use client";

import { useContext } from 'react';
import { ScrollContext } from './ScrollContext';

export const useScrollRef = (id: string) => {
  const scrollRefs = useContext(ScrollContext);
  return (node: HTMLElement | null) => {
    if (node != null) {
      scrollRefs.set(id, node);
    } else {
      scrollRefs.delete(id);
    }
  };
};
