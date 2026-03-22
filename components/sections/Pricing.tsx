'use client'

import { motion } from 'framer-motion'
import { Check, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { siteConfig } from '@/lib/content'

const { pricing } = siteConfig

export default function Pricing() {
  return (
    <section id="precios" className="bg-[#EDE9DE] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1E3A2A] mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {pricing.title}
          </h2>
          <p className="text-[#5A5A4A] max-w-xl mx-auto">{pricing.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              style={plan.featured ? { transform: 'scale(1.04)' } : {}}
              className={`relative rounded-[16px] p-6 flex flex-col ${
                plan.featured
                  ? 'bg-[#4A7C59] text-white shadow-[0_8px_32px_rgba(30,58,42,0.22)]'
                  : 'bg-white text-[#1A1A1A] border border-[rgba(74,124,89,0.15)] shadow-[0_2px_12px_rgba(30,58,42,0.06)]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>{plan.badge}</Badge>
                </div>
              )}

              <div className="mb-4">
                <h3
                  className={`font-bold text-lg mb-1 ${plan.featured ? 'text-white' : 'text-[#1E3A2A]'}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl font-bold ${plan.featured ? 'text-white' : 'text-[#4A7C59]'}`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? 'text-white/70' : 'text-[#5A5A4A]'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-6">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? 'text-[#E8B84B]' : 'text-[#4A7C59]'}`}
                    />
                    <span className={`text-sm ${plan.featured ? 'text-white/85' : 'text-[#5A5A4A]'}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href={plan.ctaHref}
                variant={plan.featured ? 'ghost' : 'primary'}
                size="md"
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-8 text-[#5A5A4A] text-sm"
        >
          <Shield className="w-4 h-4 text-[#4A7C59]" />
          <span>{pricing.guarantee}</span>
        </motion.div>
      </div>
    </section>
  )
}
