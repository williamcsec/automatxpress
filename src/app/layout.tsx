import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AutomatXpress | AI-Powered Business Automation',
  description: 'We build AI-Powered WhatsApp bots and workflow automation for SMBs. Stop losing sales from missed customer messages.',
  keywords: 'WhatsApp Bot, Business Automation, Lead Generation, Automate Sales, AI Assistant, India SMB',
  metadataBase: new URL('https://automatxpress.com'),
  openGraph: {
    title: 'AutomatXpress | 24/7 AI Sales Assistant',
    description: 'We Build AI-Powered WhatsApp Bots That Respond to Your Customers 24/7 - So You Never Miss a Sale Again',
    siteName: 'AutomatXpress',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased selection:bg-blue-200 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100`}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
