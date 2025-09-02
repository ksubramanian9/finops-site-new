import Link from 'next/link'

export default function CTA({ href = '/contact/', children = 'Book a Workshop' }: { href?: string; children?: React.ReactNode }) {
  return (
    <div className="my-8 rounded-xl border border-slate-200/30 bg-slate-50 p-6 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-6">
        <div className="text-base">{children}</div>
        <Link href={href} className="rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark">Get in touch</Link>
      </div>
    </div>
  )
}
