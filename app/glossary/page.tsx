const terms = [
  { term: 'Showback', def: 'Reporting costs back to teams without charge.' },
  { term: 'Chargeback', def: 'Charging teams for their usage.' },
  { term: 'Savings Plan / RI', def: 'Commitment-based discounts for steady usage.' },
]

export default function Glossary() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Glossary</h1>
      <ul className="mt-4 space-y-3">
        {terms.map(t => (
          <li key={t.term} className="rounded-lg border p-4">
            <div className="font-medium">{t.term}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{t.def}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
