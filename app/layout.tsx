import './globals.css'
import type { Metadata } from 'next'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { DefaultSeo } from 'next-seo'

export const metadata: Metadata = {
  title: 'FinOps Hub',
  description: 'Education and consulting for Cloud Financial Operations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* Basic SEO */}
        {/* @ts-expect-error Server Component */}
        <DefaultSeo
          titleTemplate="%s | FinOps Hub"
          openGraph={{ type: 'website', site_name: 'FinOps Hub' }}
        />
        <Nav />
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
