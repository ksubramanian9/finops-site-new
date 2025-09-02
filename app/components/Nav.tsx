'use client'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/learn/finops-principles/', label: 'Learn' },
  { href: '/services/advisory/', label: 'Services' },
  { href: '/case-studies/saas-40-cost-reduction/', label: 'Case Studies' },
  { href: '/glossary/', label: 'Glossary' },
  { href: '/contact/', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="border-b border-slate-200/20 bg-white/70 backdrop-blur dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">FinOps Hub</Link>
        <nav className="flex gap-5 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-brand dark:hover:text-brand">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
