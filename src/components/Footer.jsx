export default function Footer() {
  return (
    <footer id="contact" className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Synbion. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <span className="text-slate-300">•</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="text-slate-300">•</span>
            <a href="mailto:hello@synbion.com" className="hover:underline">hello@synbion.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
