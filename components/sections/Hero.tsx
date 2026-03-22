'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/content'
import { Star } from 'lucide-react'

const { hero } = siteConfig

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.heroImage}
          alt={hero.heroAlt}
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        {/* Fallback gradient if image doesn't exist */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A2A] to-[#4A7C59]" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-20 px-4 md:px-12 lg:px-20 max-w-3xl w-full py-24 md:py-32 mx-auto md:mx-0 text-center md:text-left">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-3"
        >
          <span className="inline-block text-[#E8B84B] text-sm font-semibold tracking-widest uppercase">
            El Calafate · Patagonia
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8"
        >
          <Button href={hero.ctaPrimary.href} variant="primary" size="lg">
            {hero.ctaPrimary.label}
          </Button>
          <Button href={hero.ctaSecondary.href} variant="ghost" size="lg">
            {hero.ctaSecondary.label} ↓
          </Button>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 justify-center md:justify-start text-white/70 text-sm"
        >
          <Star className="w-4 h-4 fill-[#E8B84B] text-[#E8B84B]" />
          <span>{hero.socialProof}</span>
        </motion.div>
      </div>
    </section>
  )
}
