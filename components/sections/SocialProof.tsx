'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/lib/content'

const { socialProof } = siteConfig

function Counter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [displayed, setDisplayed] = useState('0')

  useEffect(() => {
    if (!inView) return
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ''))
    const hasPlus = target.includes('+')
    const duration = 1200
    const steps = 40
    const increment = numeric / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, numeric)
      if (Number.isInteger(numeric)) {
        setDisplayed(`${hasPlus ? '+' : ''}${Math.round(current)}`)
      } else {
        setDisplayed(`${current.toFixed(1)}`)
      }
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {displayed}
      {suffix}
    </span>
  )
}

export default function SocialProof() {
  return (
    <section className="bg-[#F5F2EA]">
      {/* Metrics */}
      <div className="bg-[#4A7C59] py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {socialProof.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div
                  className="text-4xl md:text-5xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <Counter target={m.value} />
                </div>
                <div className="text-[#E8B84B] font-semibold text-sm">{m.label}</div>
                <div className="text-white/60 text-xs mt-1">{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1E3A2A]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Lo que dicen quienes estuvieron
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialProof.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="bg-white rounded-[12px] p-6 border border-[rgba(74,124,89,0.12)] shadow-[0_2px_12px_rgba(30,58,42,0.06)]"
            >
              <Quote className="w-8 h-8 text-[#E8B84B] mb-4" />
              <p className="text-[#1A1A1A] leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4A7C59]/15 flex items-center justify-center text-[#4A7C59] font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#1E3A2A] text-sm">{t.name}</div>
                  <div className="text-[#5A5A4A] text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}
