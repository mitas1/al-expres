'use client';

import { ComponentProps, FC, useContext, useEffect } from 'react';
import { ScrollContext } from './ScrollContext';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

interface ScrollButtonProps extends ComponentProps<'button'> {
  to: string;
  activeClassName?: string;
}

export const ScrollButton: FC<ScrollButtonProps> = ({
  to,
  className,
  activeClassName,
  ...props
}) => {
  const scrollRefs = useContext(ScrollContext);
  const { ref, inView } = useInView({
    rootMargin: `-1px 0px -100% 0px`,
  });
  useEffect(() => {
    if (scrollRefs.get(to)) {
      ref(scrollRefs.get(to));
    }
    return () => {
      ref(null);
    };
  }, [scrollRefs, ref, to]);
  return (
    <button
      {...props}
      type="button"
      className={classNames(className, inView && activeClassName)}
      onClick={() => scrollRefs.get(to)?.scrollIntoView({ behavior: 'smooth' })}
    />
  );
};
