import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    width?: number | string;
    height?: number | string;
  }
}
