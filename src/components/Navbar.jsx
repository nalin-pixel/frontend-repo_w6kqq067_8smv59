import { useState } from 'react'
import { Menu, X, PlayCircle } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 border border-white/40 shadow-sm rounded-2xl">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500 shadow-inner" />
              <span className="text-xl font-bold tracking-tight">Synbion</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#demo" className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow hover:bg-slate-800 transition-colors">
                <PlayCircle className="h-4 w-4" /> Demo
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-white/80">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="#demo" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow hover:bg-slate-800 transition-colors">
                  <PlayCircle className="h-4 w-4" /> Demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
