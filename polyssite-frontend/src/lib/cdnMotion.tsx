import React from 'react';

type MotionBundle = {
  motion: Record<string, React.ComponentType<any>>;
  AnimatePresence?: React.ComponentType<any>;
};

const fallbackMotion = new Proxy(
  {},
  {
    get: (_, tag: string) => {
      const Component = React.forwardRef<any, any>(
        ({ children, animate, initial, transition, whileHover, whileTap, exit, variants, layout, ...rest }, ref) =>
          React.createElement(tag, { ref, ...rest }, children),
      );
      Component.displayName = `motion.${tag}`;
      return Component;
    },
  },
) as MotionBundle['motion'];

const fallbackAnimatePresence: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

const resolveBundle = (): MotionBundle | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const bundle = (window as any).framerMotion as MotionBundle | undefined;
  return bundle ?? null;
};

const resolved = resolveBundle();

export const motion = (resolved?.motion || fallbackMotion) as MotionBundle['motion'];
export const AnimatePresence = (resolved?.AnimatePresence || fallbackAnimatePresence) as React.ComponentType<any>;
