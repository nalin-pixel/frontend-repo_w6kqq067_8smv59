import { motion } from 'framer-motion'
import { Cpu, Puzzle, Zap, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Modern tech',
    desc: 'Built with a playful but powerful stack for creators and students.',
  },
  {
    icon: Puzzle,
    title: 'Modular',
    desc: 'Snap together sensors, audio, and logic blocks like building bricks.',
  },
  {
    icon: Zap,
    title: 'Fast to start',
    desc: 'Plug in and prototype in minutes with guided flows.',
  },
  {
    icon: Sparkles,
    title: 'Interactive',
    desc: 'A 3D hero experience invites you to explore and play.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Synbion</h2>
          <p className="mt-2 text-slate-600">A fun, audino-inspired way to learn, build, and ship ideas.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <f.icon className="h-6 w-6 text-slate-900" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
