import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default';
}

const buttonVariants = {
  default:
    'liquid-glass inline-flex items-center justify-center rounded-full border-none px-6 py-2.5 text-foreground transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants[variant], className)} {...props} />
  )
);

Button.displayName = 'Button';
