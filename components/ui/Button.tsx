'use client'

import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[#4A7C59] text-white hover:bg-[#3d6849] active:bg-[#1E3A2A] shadow-sm',
  secondary:
    'bg-white text-[#4A7C59] border border-[#4A7C59] hover:bg-[#F5F2EA]',
  ghost:
    'bg-transparent text-white border border-white/60 hover:bg-white/10',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-[8px]',
  md: 'px-6 py-3 text-base rounded-[12px]',
  lg: 'px-8 py-4 text-lg rounded-[12px]',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  loading,
  disabled,
  children,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none'
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled || loading ? 'opacity-60 pointer-events-none' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {loading ? 'Cargando...' : children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled || loading} className={classes}>
      {loading ? 'Cargando...' : children}
    </button>
  )
}
