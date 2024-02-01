import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/app/_theme/utils';

type GenericButtonVariant = 'primary' | 'secondary' | 'yellow' | 'stripped';

type GenericButtonProps = {
  variant?: GenericButtonVariant;
  wide?: boolean;
  small?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = {
  primary: 'bg-brand-primary text-white',
  secondary: 'bg-white text-brand-primary',
  yellow: 'bg-brand-yellow text-brand-primary',
  stripped: 'bg-transparent text-brand-primary',
} as const;

export const GenericButton = forwardRef<HTMLButtonElement, GenericButtonProps>(
  (
    {
      variant = 'primary',
      className,
      small,
      wide,
      loading,
      children,
      leftIcon,
      rightIcon,
      ...otherButtonProps
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center gap-3 leading-none uppercase italic font-bold text-xl rounded-full select-none py-3.5 px-[1.875rem] justify-center',
          buttonVariants[variant],
          className,
          {
            'w-full': wide,
            'text-md': small,
            'text-lg': !small,
          }
        )}
        {...otherButtonProps}
      >
        {leftIcon ? <span>{leftIcon}</span> : null}
        {loading ? 'loading...' : children}
        {rightIcon ? <span>{rightIcon}</span> : null}
      </button>
    );
  }
);

GenericButton.displayName = 'GenericButton';
