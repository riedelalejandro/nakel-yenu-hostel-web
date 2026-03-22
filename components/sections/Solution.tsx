'use client'

import { motion } from 'framer-motion'
import { Mountain, ChefHat, Coffee, BedDouble, Users } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/lib/content'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mountain,
  ChefHat,
  Coffee,
  BedDouble,
  Users,
}

const { solution } = siteConfig

export default function Solution() {
  return (
    <SectionWrapper id="alojamiento">
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1E3A2A] mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {solution.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solution.features.map((feature, i) => {
          const Icon = iconMap[feature.icon]
          return (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="flex gap-4 p-6 bg-white rounded-[12px] border border-[rgba(74,124,89,0.15)] shadow-[0_2px_12px_rgba(30,58,42,0.08)] hover:shadow-[0_8px_24px_rgba(30,58,42,0.14)] transition-shadow"
            >
              {Icon && (
                <div className="flex-shrink-0 w-12 h-12 rounded-[10px] bg-[#4A7C59]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#4A7C59]" />
                </div>
              )}
              <div>
                <h3
                  className="font-semibold text-[#1E3A2A] mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {feature.name}
                </h3>
                <p className="text-[#5A5A4A] text-sm leading-relaxed">{feature.benefit}</p>
              </div>
            </motion.div>
          )
        })}

        {/* Highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.4, duration: 0.45 }}
          className="flex gap-4 p-6 bg-[#4A7C59] rounded-[12px] text-white md:col-span-2 lg:col-span-1"
        >
          <div>
            <div className="text-[#E8B84B] font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>
              Reservá directo y ahorrá
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Sin comisiones de plataformas. Contactanos por WhatsApp y te confirmamos disponibilidad en minutos.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
