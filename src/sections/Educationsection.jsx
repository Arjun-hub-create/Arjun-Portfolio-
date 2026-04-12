import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Data ──────────────────────────────────────────────────── */
const education = [
  {
    degree: 'Bachelor of Engineering',
    branch: 'Information Science & Engineering',
    institution: 'East West Institute of Technology',
    location: 'Bengaluru, India',
    period: '2022 – 2026',
    status: 'Expected May 2026',
    cgpa: '7.49 / 10',
    color: '#00ffe7',
    icon: '🎓',
    tags: ['Data Structures', 'DBMS', 'Operating Systems', 'Computer Networks', 'Web Technologies'],
  },
]

const certifications = [
  {
    title: 'Web Technologies',
    issuer: 'Ethnotech',
    color: '#b347ff',
    icon: '🌐',
    year: '2024',
  },
  {
    title: 'Web Programming',
    issuer: 'Ethnotech',
    color: '#ff2d78',
    icon: '💻',
    year: '2024',
  },
  {
    title: 'Microsoft SQL Server',
    issuer: 'Intellipaat',
    color: '#ffd700',
    icon: '🗄️',
    year: '2024',
  },
]

/* ─── Animated planet orbit for decoration ─────────────────── */
function MiniPlanet({ size, color, orbitSize, speed, delay = 0 }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear', delay }}
      style={{
        position: 'absolute',
        width: orbitSize, height: orbitSize,
        borderRadius: '50%',
        border: `1px dashed ${color}30`,
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}
    >
      <div style={{
        width: size, height: size,
        background: color,
        borderRadius: '50%',
        position: 'absolute',
        top: -size / 2,
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: `0 0 ${size * 2}px ${color}80`,
      }} />
    </motion.div>
  )
}

/* ─── Education Card ────────────────────────────────────────── */
function EducationCard({ edu, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        x: -80, opacity: 0, duration: 1.1, ease: 'power4.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -6, boxShadow: `0 30px 80px ${edu.color}18` }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'relative',
        background: 'rgba(8,18,38,0.85)',
        border: `1px solid ${edu.color}25`,
        borderRadius: 16,
        padding: '40px 44px',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        flex: 1,
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, transparent, ${edu.color}, transparent)`,
      }} />

      {/* Decorative orbit system top-right */}
      <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, opacity: 0.5 }}>
        <MiniPlanet size={6} color={edu.color} orbitSize={80} speed={8} />
        <MiniPlanet size={4} color="#b347ff" orbitSize={120} speed={14} delay={2} />
        <div style={{
          position: 'absolute', width: 18, height: 18, borderRadius: '50%',
          background: edu.color, top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          boxShadow: `0 0 20px ${edu.color}`,
        }} />
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 28 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: `${edu.color}15`,
          border: `1px solid ${edu.color}35`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.8rem', flexShrink: 0,
        }}>
          {edu.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            color: edu.color, letterSpacing: '0.3em',
            textTransform: 'uppercase', marginBottom: 6,
          }}>
            {edu.period} · {edu.status}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
            fontWeight: 900, color: 'var(--star-white)',
            lineHeight: 1.15, marginBottom: 4,
          }}>
            {edu.degree}
          </h3>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem', color: edu.color,
            fontWeight: 600, marginBottom: 2,
          }}>
            {edu.branch}
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.88rem', color: 'var(--text-dim)',
          }}>
            {edu.institution} · {edu.location}
          </div>
        </div>
      </div>

      {/* CGPA meter */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 20,
        padding: '18px 24px',
        background: 'rgba(0,0,0,0.25)',
        borderRadius: 10, marginBottom: 24,
        border: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
            color: 'var(--text-dim)', letterSpacing: '0.25em',
            marginBottom: 4, textTransform: 'uppercase',
          }}>CGPA</div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem', fontWeight: 900,
            color: edu.color,
            textShadow: `0 0 20px ${edu.color}60`,
            lineHeight: 1,
          }}>
            {edu.cgpa}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
            color: 'var(--text-dim)', letterSpacing: '0.2em',
            marginBottom: 8, textTransform: 'uppercase',
          }}>Performance</div>
          <div style={{
            height: 6, background: 'rgba(255,255,255,0.08)',
            borderRadius: 3, overflow: 'hidden',
          }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '74.9%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
              style={{
                height: '100%',
                background: `linear-gradient(90deg, ${edu.color}, #b347ff)`,
                borderRadius: 3,
                boxShadow: `0 0 8px ${edu.color}60`,
              }}
            />
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
            color: 'var(--text-dim)', marginTop: 5,
          }}>
            <span>0</span><span>5</span><span>10</span>
          </div>
        </div>
      </div>

      {/* Course tags */}
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
          color: 'var(--text-dim)', letterSpacing: '0.25em',
          marginBottom: 12, textTransform: 'uppercase',
        }}>Key Subjects</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {edu.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{
                padding: '5px 13px',
                background: `${edu.color}10`,
                border: `1px solid ${edu.color}28`,
                borderRadius: 20,
                fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                color: 'var(--text-dim)', letterSpacing: '0.08em',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Certification Card ────────────────────────────────────── */
function CertCard({ cert, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
        delay: index * 0.12,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -8, boxShadow: `0 20px 50px ${cert.color}20` }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'relative',
        background: 'rgba(8,18,38,0.85)',
        border: `1px solid ${cert.color}25`,
        borderRadius: 12, padding: '28px 24px',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        flex: '1 1 200px',
      }}
    >
      {/* Left accent stripe */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
        background: `linear-gradient(180deg, transparent, ${cert.color}, transparent)`,
      }} />

      {/* Subtle bg glow */}
      <div style={{
        position: 'absolute', top: -20, right: -20,
        width: 80, height: 80, borderRadius: '50%',
        background: `radial-gradient(circle, ${cert.color}12 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ fontSize: '1.6rem', marginBottom: 14 }}>{cert.icon}</div>

      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
        color: cert.color, letterSpacing: '0.3em',
        textTransform: 'uppercase', marginBottom: 8,
      }}>
        {cert.year} · {cert.issuer}
      </div>

      <h4 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.95rem', fontWeight: 700,
        color: 'var(--star-white)', lineHeight: 1.3,
        marginBottom: 16,
      }}>
        {cert.title}
      </h4>

      {/* Verified badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px',
        background: `${cert.color}12`,
        border: `1px solid ${cert.color}30`,
        borderRadius: 20,
      }}>
        <span style={{ color: cert.color, fontSize: '0.6rem' }}>✓</span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
          color: cert.color, letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>Certified</span>
      </div>
    </motion.div>
  )
}

/* ─── Section ───────────────────────────────────────────────── */
export default function EducationSection() {
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const lineRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      })
      // Line draws from center outward
      gsap.from(lineRef.current, {
        scaleX: 0, duration: 1.5, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{
        padding: '120px 8%',
        position: 'relative',
        zIndex: 2,
        background: 'linear-gradient(180deg, transparent 0%, rgba(5,10,20,0.96) 15%, rgba(5,10,20,0.96) 85%, transparent 100%)',
      }}
    >
      {/* Decorative floating stars unique to this section */}
      {[...Array(12)].map((_, i) => (
        <motion.div key={i}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
          style={{
            position: 'absolute',
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            background: i % 3 === 0 ? '#00ffe7' : i % 3 === 1 ? '#b347ff' : '#ffffff',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            pointerEvents: 'none',
          }}
        />
      ))}

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div ref={headerRef} style={{ marginBottom: 64, textAlign: 'center', position: 'relative' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--neon-purple)', letterSpacing: '0.4em',
            marginBottom: 16, textTransform: 'uppercase',
          }}>
            02 · Education & Certifications
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900, lineHeight: 1.05,
            color: 'var(--star-white)', marginBottom: 16,
          }}>
            The Mission<br />
            <span style={{
              color: 'var(--neon-cyan)',
              textShadow: '0 0 40px rgba(0,255,231,0.3)',
            }}>
              Briefing
            </span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem', color: 'var(--text-dim)',
            maxWidth: 440, margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Every astronaut needs training. Here's where the foundation was built.
          </p>

          {/* Decorative line */}
          <div ref={lineRef} style={{
            width: '100%', height: 1, marginTop: 48,
            background: 'linear-gradient(90deg, transparent, rgba(0,255,231,0.3), rgba(179,71,255,0.3), transparent)',
            transformOrigin: 'center',
          }} />
        </div>

        {/* ── Education Card ──────────────────────────────────── */}
        <div style={{ marginBottom: 72 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            color: 'var(--text-dim)', letterSpacing: '0.3em',
            textTransform: 'uppercase', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <span style={{ color: '#00ffe7' }}>▸</span>
            Academic Log
            <div style={{ flex: 1, height: 1, background: 'rgba(0,255,231,0.15)' }} />
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {education.map((edu, i) => (
              <EducationCard key={i} edu={edu} index={i} />
            ))}
          </div>
        </div>

        {/* ── Certifications ──────────────────────────────────── */}
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            color: 'var(--text-dim)', letterSpacing: '0.3em',
            textTransform: 'uppercase', marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            <span style={{ color: '#b347ff' }}>▸</span>
            Certifications
            <div style={{ flex: 1, height: 1, background: 'rgba(179,71,255,0.15)' }} />
          </div>

          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {certifications.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}