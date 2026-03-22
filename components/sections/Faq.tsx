'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/content'

const { faq, faqCta, faqNote } = siteConfig

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-[#F5F2EA] py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1E3A2A] mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Preguntas frecuentes
          </h2>
          <p className="text-[#5A5A4A]">Respondemos todo antes de que reserves.</p>
        </motion.div>

        <div className="space-y-3 mb-10">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-[12px] border border-[rgba(74,124,89,0.12)] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span
                    className="font-semibold text-[#1E3A2A] text-sm md:text-base leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 text-[#4A7C59]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[#5A5A4A] text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-[#4A7C59] rounded-[16px] p-8"
        >
          <p className="text-white/80 text-sm mb-4">{faqNote}</p>
          <Button href="#contacto" variant="ghost" size="lg">
            {faqCta}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
