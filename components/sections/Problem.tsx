'use client'

import { motion } from 'framer-motion'
import { CircleDollarSign, ChefHat, Wifi, Clock, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/content'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CircleDollarSign,
  ChefHat,
  Wifi,
  Clock,
  MapPin,
}

const { problem } = siteConfig

export default function Problem() {
  return (
    <section className="bg-[#1E3A2A] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {problem.title}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Sabemos lo que pensás antes de reservar. Acá van las respuestas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problem.pains.map((pain, i) => {
            const Icon = iconMap[pain.icon]
            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="bg-white/5 border border-white/10 rounded-[12px] p-6 hover:bg-white/8 transition-colors"
              >
                {Icon && (
                  <div className="w-10 h-10 rounded-[8px] bg-[#E8B84B]/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#E8B84B]" />
                  </div>
                )}
                <h3 className="font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {pain.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{pain.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
