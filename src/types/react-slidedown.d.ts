declare module 'react-slidedown' {
  import { ReactNode } from 'react';

  interface SlideDownProps {
    children?: ReactNode;
    className?: string;
  }

  export const SlideDown: React.FC<SlideDownProps>;
}