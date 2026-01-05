import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'NGAZI DIGITAL LAB - User Centered Design & Development',
  description:
    'Ngazi Digital Lab utilizes modern technology to create unique, custom, user-centered designs for digital products. We offer branding, design, and web & mobile development services to help businesses scale online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-white text-neutral-900 pt-16">
        <div className="noise-overlay"></div>
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 h-full w-full technical-grid"></div>
        </div>
        <div className="fixed inset-0 pointer-events-none z-0 max-w-[1400px] mx-auto border-x border-dashed border-neutral-200/60">
          <div className="absolute left-1/3 h-full w-px border-l border-dashed border-neutral-200/60"></div>
          <div className="absolute left-2/3 h-full w-px border-l border-dashed border-neutral-200/60"></div>
        </div>

        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
