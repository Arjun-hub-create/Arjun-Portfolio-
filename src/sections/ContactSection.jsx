import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const links = [
    { label: 'Email', value: 'arjunmarjun74@gmail.com', href: 'mailto:arjunmarjun74@gmail.com', color: '#00ffe7' },
    { label: 'GitHub', value: 'Arjun-hub-create', href: 'https://github.com/Arjun-hub-create', color: '#b347ff' },
    { label: 'LinkedIn', value: 'arjun-m-a64242305', href: 'https://www.linkedin.com/in/arjun-m-a64242305', color: '#ff2d78' },
    { label: 'Phone', value: '+91 74833 21654', href: 'tel:+917483321654', color: '#ffd700' },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '120px 8% 100px',
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
      }}
    >
      <div className="contact-content" style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--neon-purple)',
          letterSpacing: '0.4em',
          marginBottom: 20,
        }}>04 · CONTACT</div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          color: 'var(--star-white)',
          marginBottom: 24,
        }}>
          Let's Build<br />
          <span style={{ color: 'var(--neon-cyan)', textShadow: '0 0 40px rgba(0,255,231,0.3)' }}>
            Something Stellar
          </span>
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.1rem',
          color: 'var(--text-dim)',
          lineHeight: 1.7,
          marginBottom: 56,
        }}>
          Available for freelance projects, full-time roles, or just a good conversation
          about tech. Based in Bengaluru — open to remote or on-site.
        </p>

        <motion.a
          href="mailto:arjunmarjun74@gmail.com"
          whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(0,255,231,0.3)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '18px 48px',
            background: 'var(--neon-cyan)',
            color: 'var(--space-black)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem',
            fontWeight: 900,
            letterSpacing: '0.2em',
            textDecoration: 'none',
            borderRadius: 4,
            marginBottom: 64,
          }}
        >
          <span>✉</span> SAY HELLO
        </motion.a>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          maxWidth: 500,
          margin: '0 auto',
        }}>
          {links.map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -4, borderColor: link.color }}
              style={{
                padding: '16px',
                background: 'rgba(10,22,40,0.8)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: link.color,
                letterSpacing: '0.2em',
                marginBottom: 6,
              }}>{link.label}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--text-bright)',
                fontWeight: 500,
              }}>{link.value}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
