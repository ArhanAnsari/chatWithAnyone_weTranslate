import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import ClientProviders from '@/components/ClientProviders';


export const metadata: Metadata = {
  title: 'Chat with Anyone, Anywhere - We translate for you!',
  description: 'For educational and portfolio purposes only.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className='flex flex-col min-h-screen'>
          <ThemeProvider
            defaultTheme="dark"
            enableSystem
            attribute="class"
            disableTransitionOnChange
          >
            <Header/>
            {children}
          </ThemeProvider>

          </body>
      </html>
    </ClientProviders>
  )
}
