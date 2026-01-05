import { cn } from '@/lib/utils';
import React from 'react';

type BrandIconProps = {
  name: keyof typeof icons;
  className?: string;
  width?: string | number;
  height?: string | number;
};

// SVGs from simpleicons.org
const icons = {
  react: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2.3" fill="currentColor" />
      <g>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  figma: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M15.375 12c0 1.93-1.545 3.5-3.472 3.5H8.375v-7h3.528c1.927 0 3.472 1.57 3.472 3.5Z" fill="currentColor" />
      <path d="M8.375 4.5v3.5h3.472c1.927 0 3.472-1.57 3.472-3.5S13.774 1 11.847 1H8.375v3.5Z" fill="currentColor" />
      <path d="M8.375 16h3.472c1.927 0 3.472-1.57 3.472-3.5a3.472 3.472 0 0 0-3.472-3.5H8.375v7Z" fill="currentColor" />
      <path d="M8.375 23v-3.5h3.528c1.927 0 3.472-1.57 3.472-3.5s-1.545-3.5-3.472-3.5H8.375v7Z" fill="currentColor" />
      <path d="M15.403 8.5c1.927 0 3.472-1.57 3.472-3.5S17.33 1.5 15.403 1.5A3.472 3.472 0 0 0 11.93 5a3.472 3.472 0 0 0 3.472 3.5Z" fill="currentColor" />
    </svg>
  ),
  framer: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="currentColor" />
    </svg>
  ),
  webflow: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M1.333 3.5v17L12 12 1.333 3.5zM12 12l10.667 8.5v-6.5L12 12zm0 0v-1.5L20.5 4h-8L12 10.5z" fill="currentColor" />
    </svg>
  ),
  chatgpt: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M22.2819 10.3331C22.2819 9.95431 22.124 9.59123 21.8494 9.3166C21.5748 9.04197 21.2117 8.88403 20.8329 8.88403H18.8883V7.5059C18.8883 6.94528 18.6675 6.40785 18.2721 6.01243C17.8767 5.61701 17.3392 5.39624 16.7786 5.39624C16.218 5.39624 15.6806 5.61701 15.2852 6.01243C14.8897 6.40785 14.669 6.94528 14.669 7.5059V8.88403H9.45365C9.07485 8.88403 8.71177 9.04197 8.43714 9.3166C8.16251 9.59123 8.00458 9.95431 8.00458 10.3331V12.2777H6.62646C6.06584 12.2777 5.52841 12.4985 5.13299 12.8939C4.73757 13.2893 4.5168 13.8268 4.5168 14.4063C4.5168 14.9858 4.73757 15.5232 5.13299 15.9186C5.52841 16.3141 6.06584 16.5348 6.62646 16.5348H8.00458V18.8883C8.00458 19.4489 8.22535 19.9863 8.62077 20.3817C9.01619 20.7772 9.55362 21 10.1142 21C10.6748 21 11.2123 20.7772 11.6077 20.3817C12.0031 19.9863 12.2239 19.4489 12.2239 18.8883V16.5348H18.8883V18.8883C18.8883 19.4489 19.1091 19.9863 19.5045 20.3817C19.9 20.7772 20.4374 21 20.998 21C21.5586 21 22.096 20.7772 22.4914 20.3817C22.8869 19.9863 23.1076 19.4489 23.1076 18.8883V16.5348H24.4858C25.0464 16.5348 25.5838 16.3141 25.9792 15.9186C26.3747 15.5232 26.5954 14.9858 26.5954 14.4063C26.5954 13.8268 26.3747 13.2893 25.9792 12.8939C25.5838 12.4985 25.0464 12.2777 24.4858 12.2777H23.1076V10.3331H22.2819Z" fill="currentColor" />
    </svg>
  ),
  google: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.44-3.386-7.44-7.574s3.345-7.574 7.44-7.574c2.33 0 3.891.989 4.785 1.85l3.25-3.13C18.045 1.822 15.418 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c6.92 0 11.91-4.795 11.91-12.03 0-.795-.064-1.535-.19-2.285H12.24z" fill="currentColor"/>
    </svg>
  ),
  vercel: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
    </svg>
  ),
};

export const BrandIcon = ({ name, className, width = '28', height = '28' }: BrandIconProps) => {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className={cn(className)} width={width} height={height} fill="currentColor" />;
};
