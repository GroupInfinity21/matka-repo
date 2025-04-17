import './globals.css';
import type { Metadata } from 'next';
import { Poppins  } from 'next/font/google'

const robotoSlab = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
})

export const metadata: Metadata = {
  title: 'Matka',
  description: 'Escolha o seu melhor destino e nós cuidamos da sua experiência'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/x-icon" />
       </head>
      <body className={robotoSlab.className}>{children}</body>
    </html>
  );
}
