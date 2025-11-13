import { motion } from 'framer-motion'

const products = [
  {
    title: 'Oudino Kit',
    tagline: 'Auditory + Arduino mashup',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E-Anfun Board',
    tagline: 'Fun-first embedded learning',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Synbion Core',
    tagline: 'Playful robotics brain',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function ProductShowcase() {
  return (
    <section id="product" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Product</h2>
          <p className="mt-2 text-slate-600">Hardware kits and tools that make invention feel like play.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-slate-600 text-sm">{p.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
