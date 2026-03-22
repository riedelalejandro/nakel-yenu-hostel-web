'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/content'

const { gallery } = siteConfig

export default function Gallery() {
  return (
    <section className="bg-[#EDE9DE] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1E3A2A] mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {gallery.title}
          </h2>
          <p className="text-[#5A5A4A] max-w-xl mx-auto">{gallery.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className={`relative overflow-hidden rounded-[12px] group ${
                img.featured ? 'col-span-2 row-span-2 aspect-[4/3]' : 'aspect-square'
              }`}
            >
              {/* Gradient fallback — shows if image doesn't load */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A7C59] to-[#1E3A2A]" />
              {/* TODO: replace with real images in /public/images/gallery/ */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={img.featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
