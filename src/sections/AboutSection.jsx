import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        y: 60, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '120px 8%',
        position: 'relative',
        zIndex: 2,
        background: 'linear-gradient(180deg, transparent 0%, rgba(5,10,20,0.95) 20%, rgba(5,10,20,0.95) 80%, transparent 100%)',
      }}
    >
      <div ref={contentRef} style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

        {/* Left text */}
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--neon-purple)',
            letterSpacing: '0.4em',
            marginBottom: 16,
            textTransform: 'uppercase',
          }}>01 · About</div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            color: 'var(--star-white)',
            lineHeight: 1.1,
            marginBottom: 24,
          }}>
            Engineering<br />
            <span style={{ color: 'var(--neon-cyan)' }}>Digital Cosmos</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'var(--text-dim)',
            lineHeight: 1.8,
            marginBottom: 20,
          }}>
            I'm a Full Stack Developer based in Bengaluru, India, currently completing my B.E. in Information Science at
            East West Institute of Technology (Expected May 2026, CGPA 7.49/10).
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'var(--text-dim)',
            lineHeight: 1.8,
            marginBottom: 32,
          }}>
            I build production-grade SaaS products — real-time dashboards, scalable REST APIs, subscription platforms —
            with a passion for cinematic UI, clean architecture, and systems that just work.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="mailto:arjunmarjun74@gmail.com"
              style={{
                padding: '10px 24px',
                background: 'rgba(0,255,231,0.1)',
                border: '1px solid rgba(0,255,231,0.3)',
                borderRadius: 4,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--neon-cyan)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                transition: 'all 0.3s',
              }}
            >
              arjunmarjun74@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-m-dev/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 24px',
                background: 'rgba(179,71,255,0.1)',
                border: '1px solid rgba(179,71,255,0.3)',
                borderRadius: 4,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--neon-purple)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right - card */}
        <div>
          <div style={{
            background: 'rgba(10,22,40,0.8)',
            border: '1px solid rgba(0,255,231,0.15)',
            borderRadius: 12,
            padding: 32,
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--text-dim)',
              marginBottom: 24,
              letterSpacing: '0.2em',
            }}>// PROFILE.json</div>

            {[
              { key: 'name', val: '"Arjun M"', color: 'var(--neon-cyan)' },
              { key: 'role', val: '"Full Stack Developer"', color: 'var(--neon-purple)' },
              { key: 'location', val: '"Bengaluru, India"', color: '#ffd700' },
              { key: 'education', val: '"B.E. ISE · EWIT · 2026"', color: 'var(--neon-cyan)' },
              { key: 'stack', val: '["MERN","FastAPI","Python"]', color: 'var(--neon-pink)' },
              { key: 'available', val: 'true', color: '#00ff88' },
            ].map(item => (
              <div key={item.key} style={{
                display: 'flex',
                gap: 12,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
              }}>
                <span style={{ color: 'var(--text-dim)', minWidth: 100 }}>"{item.key}":</span>
                <span style={{ color: item.color }}>{item.val}</span>
              </div>
            ))}

            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{
                display: 'inline-block',
                width: 10, height: 16,
                background: 'var(--neon-cyan)',
                marginTop: 12,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
