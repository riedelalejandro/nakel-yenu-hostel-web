'use client'

import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export default function SectionWrapper({ id, className = '', children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  )
}
