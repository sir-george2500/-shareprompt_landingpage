import '../styles/globals.css';
import Nav from '../components/Nav'


export const metadata = {
  title: 'promptspace',
  description: 'Discover and share Powereful AI prompt',
};


export default function RootLayout({children}) {
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

