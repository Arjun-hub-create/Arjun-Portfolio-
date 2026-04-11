import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      padding: '32px 8%',
      borderTop: '1px solid rgba(0,255,231,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      position: 'relative',
      zIndex: 2,
      background: 'rgba(5,10,20,0.9)',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        fontWeight: 900,
        color: 'var(--neon-cyan)',
        letterSpacing: '0.15em',
      }}>
        AJ<span style={{ color: 'var(--neon-purple)' }}>·</span>PIX
      </span>

      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'var(--text-dim)',
        letterSpacing: '0.1em',
      }}>
        © {new Date().getFullYear()} Arjun M · Crafted from Bengaluru 🚀
      </span>

      <div style={{ display: 'flex', gap: 20 }}>
        {[
          { label: 'GitHub', href: 'https://github.com/Arjun-hub-create' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arjun-m-dev/' },
          { label: 'Email', href: 'mailto:arjunmarjun74@gmail.com' },
        ].map(link => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            whileHover={{ color: 'var(--neon-cyan)' }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--text-dim)',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              transition: 'color 0.3s',
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </footer>
  )
}
