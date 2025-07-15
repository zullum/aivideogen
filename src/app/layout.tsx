import type { Metadata, Viewport } from 'next'
import './globals.css'

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}