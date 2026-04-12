import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home',      href: '#hero'      },
  { label: 'About',     href: '#about'     },
  { label: 'Education', href: '#education' },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href, label) => {
    setActive(label)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '0 5%',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(5,10,20,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,231,0.1)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        onClick={(e) => { e.preventDefault(); handleNav('#hero', 'Home') }}
        style={{ textDecoration: 'none' }}
        whileHover={{ scale: 1.05 }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 900,
          letterSpacing: '0.15em',
          color: 'var(--neon-cyan)',
          textShadow: '0 0 20px rgba(0,255,231,0.5)',
        }}>
          AJ<span style={{ color: 'var(--neon-purple)' }}>·</span>PIX
        </span>
      </motion.a>

      {/* Links */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {navLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNav(link.href, link.label) }}
            whileHover={{ y: -2 }}
            style={{
              textDecoration: 'none',
              padding: '8px 16px',
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: active === link.label ? 'var(--neon-cyan)' : 'var(--text-dim)',
              background: active === link.label ? 'rgba(0,255,231,0.1)' : 'transparent',
              border: active === link.label ? '1px solid rgba(0,255,231,0.3)' : '1px solid transparent',
              borderRadius: 4,
              transition: 'all 0.3s ease',
            }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href="mailto:arjunmarjun74@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            textDecoration: 'none',
            padding: '8px 20px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'var(--space-black)',
            background: 'var(--neon-cyan)',
            borderRadius: 4,
            marginLeft: 8,
          }}
        >
          HIRE ME
        </motion.a>
      </div>
    </motion.nav>
  )
}