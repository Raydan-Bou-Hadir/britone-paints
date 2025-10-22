import React from 'react';
import clsx from 'clsx';

export function Button({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}) {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';

  const variants: Record<string, string> = {
    default: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
    outline:
      'border border-gray-300 navy-blue hover:bg-[#a10212] hover:text-white',
    ghost: 'bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-200',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const sizes: Record<string, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
