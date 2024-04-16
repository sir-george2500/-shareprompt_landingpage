import '../styles/globals.css';
import { ReactNode } from 'react';
import Nav from '../components/Nav'

interface Metadata {
  title: string;
  description: string;
}

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'promptspace',
  description: 'Discover and share Powerful AI prompt',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  );
}

