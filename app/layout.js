import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Start from '@/components/Start'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VEGA',
  description: 'Vega is token and part of unique ecosystem, comprising an Investment Fund and a Marketing Consulting Agency. Also it is a part of amazing business model with real utility and revenue-generating potential.',
}

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <Start />
        <Navbar />
        {children}</body>
    </html>
  )
}
