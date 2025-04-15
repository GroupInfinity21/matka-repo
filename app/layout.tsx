import './globals.css';
import type { Metadata } from 'next';
import { Poppins  } from 'next/font/google'
import Head from 'next/head';

const robotoSlab = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
})

export const metadata: Metadata = {
  title: 'Matka',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <Head>
      <link rel="icon" href="/public/favicon-32x32.png" type="image/x-icon" />
       </Head>
      <body className={robotoSlab.className}>{children}</body>
    </html>
  );
}
