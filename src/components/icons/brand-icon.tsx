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
  flutter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24">
      <path d="m14.314 0 8.686 8.686-3.475 3.475-5.211-5.211zm-10.4 10.4L12.5 1.814 21.086 10.4 12.5 18.986l-5.211-5.211zm5.211 5.211 5.211-5.211 3.475 3.475-8.686 8.686z" fill="currentColor" />
    </svg>
  ),
  stripe: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M18.293 2.009c.813.02 1.554.49 1.94 1.237s.306 1.637-.21 2.336l-9.61 12.813c-.813-.02-1.554-.49-1.94-1.237s-.306-1.637.21-2.336z" fill="currentColor" />
      <path d="M22.015 8.163c.813.02 1.554.49 1.94 1.237s.306 1.637-.21 2.336l-9.61 12.813c-.813-.02-1.554-.49-1.94-1.237s-.306-1.637.21-2.336z" fill="currentColor" />
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
