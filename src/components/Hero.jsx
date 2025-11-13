import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-200/40 via-sky-200/30 to-transparent" />
        <div className="absolute inset-0" aria-hidden>
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900"
              >
                Playful tech for fun and audino products
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-5 text-lg text-slate-700 max-w-xl"
              >
                Synbion builds delightful hardware and software experiences that feel alive. Inspired by modern portfolio aesthetics and crafted for curious minds.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="#product" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 font-semibold shadow hover:bg-slate-800 transition-colors">
                  Explore product
                </a>
                <a href="#showcase" className="inline-flex items-center justify-center rounded-xl bg-white/80 backdrop-blur border border-slate-200 px-5 py-3 font-semibold text-slate-900 hover:bg-white transition-colors">
                  View showcase
                </a>
              </motion.div>
            </div>

            <div className="md:col-span-6" />
          </div>
        </div>
      </div>
    </section>
  )
}
