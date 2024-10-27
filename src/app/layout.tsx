import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PhimSky - Movie Streaming',
  description: 'Watch your favorite movies online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <InitMocks />
      </body>
    </html>
  )
}

function InitMocks() {
  if (typeof window !== 'undefined') {
    const initMocks = async () => {
      if (process.env.NODE_ENV === 'development') {
        const { worker } = await import('@/mocks/browser')
        await worker.start({
          onUnhandledRequest: 'bypass',
        })
      }
    }
    
    initMocks()
  }
  return null
}