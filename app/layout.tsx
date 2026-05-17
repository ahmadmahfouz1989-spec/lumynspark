import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumyn Spark — AI engines, done right',
  description: 'We build products that harness the power of AI in ways that are thoughtful, safe, and genuinely useful.',
  openGraph: {
    title: 'Lumyn Spark',
    description: 'AI engines, done right.',
    url: 'https://lumynspark.com',
    siteName: 'Lumyn Spark',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white antialiased">{children}</body>
    </html>
  )
}
