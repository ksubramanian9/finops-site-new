import Link from 'next/link'
import CTA from '../components/CTA'
import { Metric } from '../components/Metric'

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold">FinOps: Learn, Apply, Optimize</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          A hybrid hub for education and consulting on Cloud Financial Operations.
          Guides, templates, and workshops to turn cloud cost chaos into clarity.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/learn/finops-principles/" className="rounded-lg bg-brand px-5 py-2 text-white">Start Learning</Link>
          <Link href="/services/advisory/" className="rounded-lg border px-5 py-2">See Services</Link>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Metric label="Avg. Cost Reduction" value="15–40%" />
        <Metric label="Workshops Delivered" value="120+" />
        <Metric label="Clouds Covered" value="AWS · Azure · GCP" />
        <Metric label="Practitioner Guides" value="25+" />
      </section>

      <CTA>Want a tailored 2‑week FinOps accelerator for your org?</CTA>
    </div>
  )
}
