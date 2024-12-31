import GlobalStyleProvider from '@/components/ProtectedStyleProvider/ProtectedStyleProvider';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'Next.js, React, MongoDB Tutorial',
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalStyleProvider>{children}</GlobalStyleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
