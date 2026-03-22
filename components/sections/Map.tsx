'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/content'

const { map, business } = siteConfig

export default function Map() {
  return (
    <section id="ubicacion" className="bg-[#EDE9DE] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
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
            Cómo llegar
          </h2>
          <p className="text-[#5A5A4A] max-w-xl mx-auto">{map.reference}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-[16px] overflow-hidden shadow-[0_2px_12px_rgba(30,58,42,0.08)]"
          >
            <div className="aspect-video md:h-96">
              <iframe
                src={map.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${business.name}`}
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div id="contacto" className="bg-white rounded-[12px] p-5 border border-[rgba(74,124,89,0.12)]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4A7C59] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#1E3A2A] text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    Dirección
                  </p>
                  <p className="text-[#5A5A4A] text-sm">{map.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-5 border border-[rgba(74,124,89,0.12)]">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#4A7C59] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#1E3A2A] text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    Horarios
                  </p>
                  <p className="text-[#5A5A4A] text-sm">{map.checkin}</p>
                  <p className="text-[#5A5A4A] text-sm">{map.checkout}</p>
                  <p className="text-[#5A5A4A] text-sm">{map.receptionHours}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-5 border border-[rgba(74,124,89,0.12)]">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#4A7C59] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#1E3A2A] text-sm mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    Contacto
                  </p>
                  <p className="text-[#5A5A4A] text-sm">{business.phone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                href={`https://wa.me/${map.whatsapp.replace(/[^0-9]/g, '')}`}
                variant="primary"
                size="md"
                className="w-full justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Escribir por WhatsApp
              </Button>
              <Button
                href={map.mapsUrl}
                variant="secondary"
                size="md"
                className="w-full justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
