'use client';

import { createContext } from 'react';

export const ScrollContext = createContext<Map<string, HTMLElement>>(new Map());
