import '../styles/globals.css';
import Nav from '../components/Nav'




export const metadata: Metadata = {
  title: 'promptspace',
  description: 'Discover and share Powerful AI prompt',
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

