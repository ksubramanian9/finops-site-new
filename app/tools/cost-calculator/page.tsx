'use client'
import { useState } from 'react'

export default function CostCalculator() {
  const [accounts, setAccounts] = useState(3)
  const [regions, setRegions] = useState(2)
  const [monthlySpend, setMonthlySpend] = useState(10000)
  const [riCoverage, setRiCoverage] = useState(30) // %

  const optimized = monthlySpend * (1 - Math.min(riCoverage, 80) / 100 * 0.5)
  const est = optimized * (1 - 0.05 * Math.log(accounts + regions))

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-semibold">Cost Calculator (Simple)</h1>
      <div className="space-y-3">
        <label className="block text-sm">Monthly Cloud Spend (₹ or $)</label>
        <input type="number" value={monthlySpend} onChange={e=>setMonthlySpend(+e.target.value)} className="w-full rounded border px-3 py-2" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Accounts/Projects</label>
          <input type="number" value={accounts} onChange={e=>setAccounts(+e.target.value)} className="w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Regions</label>
          <input type="number" value={regions} onChange={e=>setRegions(+e.target.value)} className="w-full rounded border px-3 py-2" />
        </div>
      </div>
      <div>
        <label className="block text-sm">RI/SP Coverage (%)</label>
        <input type="range" min={0} max={80} value={riCoverage} onChange={e=>setRiCoverage(+e.target.value)} className="w-full" />
        <div className="text-sm text-slate-500">{riCoverage}%</div>
      </div>

      <div className="rounded-xl border p-4">
        <div className="text-sm text-slate-500">Estimated optimized monthly cost</div>
        <div className="text-2xl font-semibold">{est.toLocaleString()}</div>
      </div>
    </div>
  )
}
