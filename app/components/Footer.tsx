export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/20 py-8 text-center text-sm text-slate-500">
      <div className="mx-auto max-w-5xl px-6">
        © {new Date().getFullYear()} FinOps Hub · Built with Next.js · Hosted on GitHub Pages
      </div>
    </footer>
  )
}
