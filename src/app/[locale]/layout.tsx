import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Video Generation Platform',
  description: 'Create professional-quality videos using artificial intelligence',
  keywords: 'AI video generation, text to video, image to video, AI video editing',
  authors: [{ name: 'AI Video Platform' }],
  openGraph: {
    title: 'AI Video Generation Platform',
    description: 'Create professional-quality videos using artificial intelligence',
    type: 'website',
  },
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}