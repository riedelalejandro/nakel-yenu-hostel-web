import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/content'

const { footer, business } = siteConfig

export default function Footer() {
  return (
    <footer className="bg-[#1E3A2A] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {business.name}
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {business.description}
            </p>
            <div className="flex gap-3 mt-4">
              <Link
                href={footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 hover:text-[#E8B84B] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href={footer.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/50 hover:text-[#E8B84B] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p
              className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Navegación
            </p>
            <ul className="space-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-white/40 text-xs uppercase tracking-widest mb-3 font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contacto
            </p>
            <p className="text-white/70 text-sm mb-1">{business.address}</p>
            <p className="text-white/70 text-sm mb-1">{business.phone}</p>
            <p className="text-white/70 text-sm">WhatsApp: {business.whatsapp}</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">{footer.copyright}</p>
          <div className="flex gap-4">
            {footer.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
