import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Pixel Astronaut Boy SVG ─────────────────────────────── */
function AstronautBoy() {
  return (
    <svg width="180" height="240" viewBox="0 0 180 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Antenna */}
      <line x1="90" y1="14" x2="90" y2="2" stroke="#00ffe7" strokeWidth="2.5"/>
      <circle cx="90" cy="0" r="4" fill="#ff2d78"/>
      <motion.circle cx="90" cy="0" r="8" fill="#ff2d78" opacity="0.3">
      </motion.circle>

      {/* Helmet outer */}
      <ellipse cx="90" cy="46" rx="38" ry="42" fill="#0d1f3c" stroke="#00ffe7" strokeWidth="2"/>
      {/* Helmet highlight ring */}
      <ellipse cx="90" cy="46" rx="38" ry="42" fill="none" stroke="rgba(0,255,231,0.15)" strokeWidth="8"/>

      {/* Visor */}
      <rect x="62" y="28" width="56" height="40" rx="14" fill="#001830"/>
      <rect x="62" y="28" width="56" height="40" rx="14" fill="url(#visorG)" opacity="0.8"/>
      <defs>
        <linearGradient id="visorG" x1="62" y1="28" x2="118" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00ffe7" stopOpacity="0.25"/>
          <stop offset="50%" stopColor="#b347ff" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#001020" stopOpacity="0.4"/>
        </linearGradient>
      </defs>

      {/* Eyes */}
      <rect x="72" y="38" width="12" height="12" rx="6" fill="#00ffe7"/>
      <rect x="96" y="38" width="12" height="12" rx="6" fill="#00ffe7"/>
      {/* Eye shine */}
      <circle cx="75" cy="41" r="2" fill="white" opacity="0.6"/>
      <circle cx="99" cy="41" r="2" fill="white" opacity="0.6"/>
      {/* Smile line */}
      <path d="M 78 56 Q 90 64 102 56" stroke="#00ffe7" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Helmet shine */}
      <ellipse cx="72" cy="22" rx="10" ry="6" fill="white" opacity="0.08"/>

      {/* Neck connector */}
      <rect x="78" y="86" width="24" height="12" rx="4" fill="#1a3060" stroke="#00ffe7" strokeWidth="1"/>

      {/* Suit body */}
      <rect x="36" y="98" width="108" height="88" rx="14" fill="#0d1f3c" stroke="#00ffe7" strokeWidth="1.5"/>
      {/* Suit body shading */}
      <rect x="36" y="98" width="108" height="88" rx="14" fill="url(#suitG)" opacity="0.4"/>
      <defs>
        <linearGradient id="suitG" x1="36" y1="98" x2="144" y2="186" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a3a6a"/>
          <stop offset="100%" stopColor="#050a14"/>
        </linearGradient>
      </defs>

      {/* Chest control panel */}
      <rect x="56" y="114" width="68" height="44" rx="6" fill="#030c1e" stroke="#b347ff" strokeWidth="1.5"/>
      {/* Panel grid lines */}
      <line x1="56" y1="136" x2="124" y2="136" stroke="#b347ff" strokeWidth="0.5" opacity="0.4"/>
      <line x1="90" y1="114" x2="90" y2="158" stroke="#b347ff" strokeWidth="0.5" opacity="0.4"/>

      {/* Panel buttons */}
      <rect x="62" y="120" width="10" height="10" rx="2" fill="#00ffe7"/>
      <rect x="76" y="120" width="10" height="10" rx="2" fill="#ff2d78"/>
      <rect x="90" y="120" width="10" height="10" rx="2" fill="#ffd700"/>
      <rect x="104" y="120" width="10" height="10" rx="2" fill="#b347ff"/>

      {/* AJ badge */}
      <rect x="62" y="138" width="56" height="14" rx="3" fill="rgba(0,255,231,0.1)" stroke="#00ffe7" strokeWidth="0.8"/>
      <text x="68" y="149" fontFamily="monospace" fontSize="8" fill="#00ffe7" letterSpacing="3" fontWeight="bold">AJ · M</text>

      {/* Left arm */}
      <rect x="0" y="102" width="36" height="22" rx="11" fill="#0d1f3c" stroke="#00ffe7" strokeWidth="1.5"/>
      {/* Left glove */}
      <circle cx="12" cy="138" r="15" fill="#b347ff" stroke="#00ffe7" strokeWidth="1.5"/>
      <rect x="6" y="132" width="12" height="8" rx="3" fill="#8a22ee"/>
      {/* Glove fingers */}
      <rect x="4" y="140" width="5" height="10" rx="2.5" fill="#b347ff"/>
      <rect x="11" y="141" width="5" height="11" rx="2.5" fill="#b347ff"/>
      <rect x="18" y="140" width="5" height="10" rx="2.5" fill="#b347ff"/>

      {/* Right arm */}
      <rect x="144" y="102" width="36" height="22" rx="11" fill="#0d1f3c" stroke="#00ffe7" strokeWidth="1.5"/>
      {/* Right glove */}
      <circle cx="168" cy="138" r="15" fill="#b347ff" stroke="#00ffe7" strokeWidth="1.5"/>
      <rect x="162" y="132" width="12" height="8" rx="3" fill="#8a22ee"/>
      <rect x="153" y="140" width="5" height="10" rx="2.5" fill="#b347ff"/>
      <rect x="161" y="141" width="5" height="11" rx="2.5" fill="#b347ff"/>
      <rect x="169" y="140" width="5" height="10" rx="2.5" fill="#b347ff"/>

      {/* Jetpack */}
      <rect x="122" y="100" width="28" height="48" rx="6" fill="#071428" stroke="#b347ff" strokeWidth="1.5"/>
      <rect x="127" y="108" width="18" height="6" rx="3" fill="#b347ff" opacity="0.5"/>
      <rect x="127" y="118" width="18" height="6" rx="3" fill="#00ffe7" opacity="0.5"/>
      {/* Jetpack thruster */}
      <ellipse cx="136" cy="152" rx="8" ry="4" fill="#ff2d78" opacity="0.8"/>

      {/* Legs */}
      <rect x="50" y="184" width="34" height="46" rx="8" fill="#0d1f3c" stroke="#00ffe7" strokeWidth="1.5"/>
      <rect x="96" y="184" width="34" height="46" rx="8" fill="#0d1f3c" stroke="#00ffe7" strokeWidth="1.5"/>

      {/* Knee pads */}
      <rect x="54" y="196" width="26" height="12" rx="4" fill="#1a3060"/>
      <rect x="100" y="196" width="26" height="12" rx="4" fill="#1a3060"/>

      {/* Boots */}
      <rect x="44" y="222" width="46" height="18" rx="7" fill="#00ffe7"/>
      <rect x="90" y="222" width="46" height="18" rx="7" fill="#00ffe7"/>
      <rect x="44" y="222" width="46" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
      <rect x="90" y="222" width="46" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
    </svg>
  )
}

/* ─── Floating Orbit Ring ─────────────────────────────────── */
function OrbitRing({ size, speed, color, children, offsetX = 0 }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      style={{
        position: 'absolute',
        width: size, height: size,
        border: `1px dashed ${color}`,
        borderRadius: '50%',
        top: '50%', left: '50%',
        transform: `translate(calc(-50% + ${offsetX}px), -50%)`,
        opacity: 0.25,
      }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Hero Section ────────────────────────────────────────── */
export default function HeroSection() {
  const heroRef       = useRef(null)
  const titleRef      = useRef(null)
  const subtitleRef   = useRef(null)
  const ctaRef        = useRef(null)
  const avatarRef     = useRef(null)
  const statsRef      = useRef(null)
  const tagRef        = useRef(null)
  const bgGlowRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Entry animations */
      const tl = gsap.timeline({ delay: 0.15 })
      tl.from(tagRef.current,      { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' })
        .from(titleRef.current,    { y: 80, opacity: 0, duration: 1.1, ease: 'power4.out' }, '-=0.3')
        .from(subtitleRef.current, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
        .from(ctaRef.current,      { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from(statsRef.current,    { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from(avatarRef.current,   { x: 80, opacity: 0, duration: 1.2, ease: 'power4.out' }, '-=1.2')

      /* Scroll parallax — title drifts up faster */
      gsap.to(titleRef.current, {
        y: -140,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.8 },
      })
      gsap.to(subtitleRef.current, {
        y: -80,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.4 },
      })
      gsap.to(ctaRef.current, {
        y: -60,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
      })
      gsap.to(avatarRef.current, {
        y: -90,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      })
      gsap.to(bgGlowRef.current, {
        scale: 1.6,
        opacity: 0,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'center top', scrub: true },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '100px 8% 60px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        gap: 40,
      }}
    >
      {/* Background glow */}
      <div
        ref={bgGlowRef}
        style={{
          position: 'absolute',
          width: 700, height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,231,0.06) 0%, rgba(179,71,255,0.04) 40%, transparent 70%)',
          left: '30%', top: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,255,231,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,231,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)',
      }} />

      {/* ── LEFT CONTENT ────────────────────────────────── */}
      <div style={{ flex: 1, maxWidth: 620, zIndex: 2 }}>

        {/* Status tag */}
        <div ref={tagRef}>
          <motion.div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '7px 16px',
              background: 'rgba(0,255,231,0.07)',
              border: '1px solid rgba(0,255,231,0.22)',
              borderRadius: 24,
              marginBottom: 28,
            }}
          >
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#00ffe7',
              boxShadow: '0 0 8px #00ffe7',
              display: 'inline-block',
              animation: 'blink 2s ease infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              color: 'var(--neon-cyan)', letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}>
              Open to Opportunities · Bengaluru
            </span>
          </motion.div>
        </div>

        {/* Title */}
        <div ref={titleRef}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: 12,
          }}>
            <span style={{
              display: 'block',
              color: 'var(--star-white)',
              textShadow: '0 0 60px rgba(232,244,255,0.08)',
            }}>
              ARJUN
            </span>
            <span style={{
              display: 'block',
              color: 'var(--neon-cyan)',
              textShadow: '0 0 50px rgba(0,255,231,0.35), 0 0 100px rgba(0,255,231,0.15)',
            }}>
              M.
            </span>
          </h1>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
            color: 'var(--neon-purple)',
            letterSpacing: '0.35em',
            marginBottom: 28,
            textTransform: 'uppercase',
          }}>
            ⚡ Full Stack Developer
          </div>
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
          color: 'var(--text-dim)',
          lineHeight: 1.75,
          maxWidth: 460,
          marginBottom: 44,
          fontWeight: 400,
        }}>
          I build production-grade SaaS — real-time dashboards, scalable APIs,
          and cloud-deployed systems. MERN · FastAPI · Python · Socket.IO.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 64 }}>
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(0,255,231,0.45)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 38px',
              background: 'var(--neon-cyan)',
              color: 'var(--space-black)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.22em', textDecoration: 'none',
              borderRadius: 4,
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}
          >
            🚀 EXPLORE WORK
          </motion.a>

          <motion.a
            href="https://github.com/Arjun-hub-create"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, borderColor: 'var(--neon-cyan)', color: 'var(--neon-cyan)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 34px',
              background: 'transparent',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.22em', textDecoration: 'none',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.18)',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              transition: 'all 0.3s ease',
            }}
          >
            <GithubIcon /> GITHUB
          </motion.a>

          <motion.a
            href="mailto:arjunmarjun74@gmail.com"
            whileHover={{ scale: 1.04, borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 34px',
              background: 'transparent',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.22em', textDecoration: 'none',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.18)',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              transition: 'all 0.3s ease',
            }}
          >
            ✉ CONTACT
          </motion.a>
        </div>

        {/* Stats */}
        <div ref={statsRef} style={{ display: 'flex', gap: 48 }}>
          {[
            { num: '5+',  label: 'Live Projects' },
            { num: '2+',  label: 'Years Coding'  },
            { num: '10+', label: 'Technologies'  },
          ].map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 900,
                color: 'var(--neon-cyan)',
                textShadow: '0 0 20px rgba(0,255,231,0.35)',
                lineHeight: 1,
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.18em',
                marginTop: 5,
                textTransform: 'uppercase',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — ASTRONAUT ──────────────────────────── */}
      <div
        ref={avatarRef}
        style={{
          position: 'relative',
          flex: '0 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 420, height: 420,
        }}
      >
        {/* Orbit rings */}
        <OrbitRing size={380} speed={28} color="rgba(0,255,231,0.4)">
          <div style={{
            width: 10, height: 10, background: 'var(--neon-cyan)',
            borderRadius: '50%', position: 'absolute', top: -5, left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 12px var(--neon-cyan)',
          }} />
        </OrbitRing>
        <OrbitRing size={290} speed={18} color="rgba(179,71,255,0.3)">
          <div style={{
            width: 8, height: 8, background: 'var(--neon-purple)',
            borderRadius: '50%', position: 'absolute', bottom: -4, left: '50%',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 10px var(--neon-purple)',
          }} />
        </OrbitRing>
        <OrbitRing size={200} speed={12} color="rgba(255,45,120,0.25)" />

        {/* Glow pulse behind astronaut */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: 200, height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,231,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Floating astronaut */}
        <motion.div
          animate={{ y: [-16, 16, -16], rotate: [-2, 2, -2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'relative', zIndex: 1,
            filter: 'drop-shadow(0 0 30px rgba(0,255,231,0.25)) drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
          }}
        >
          <AstronautBoy />
        </motion.div>

        {/* Floating tech badges */}
        {[
          { tech: 'React',    pos: { top: '12%',    left:  '-10%'  }, delay: 0   },
          { tech: 'FastAPI',  pos: { top: '30%',    right: '-12%'  }, delay: 0.4 },
          { tech: 'MongoDB',  pos: { bottom: '28%', left:  '-12%'  }, delay: 0.8 },
          { tech: 'Node.js',  pos: { bottom: '12%', right: '-8%'   }, delay: 1.2 },
        ].map(({ tech, pos, delay }) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{ delay, duration: 3 + delay, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            style={{
              position: 'absolute', ...pos,
              padding: '5px 14px',
              background: 'rgba(5,10,20,0.85)',
              border: '1px solid rgba(0,255,231,0.3)',
              borderRadius: 20,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--neon-cyan)',
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        zIndex: 2,
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
          color: 'var(--text-dim)', letterSpacing: '0.25em',
        }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1.5, height: 44, background: 'linear-gradient(var(--neon-cyan), transparent)' }}
        />
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.35} }
      `}</style>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}
