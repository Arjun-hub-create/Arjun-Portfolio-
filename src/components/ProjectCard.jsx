import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function BrowserMockup({ project, currentImg, setCurrentImg }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      project.images.forEach((_, i) => {
        if (i === 0) return
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `top+=${i * 90} center`,
          onEnter: () => setCurrentImg(i),
          onLeaveBack: () => setCurrentImg(Math.max(0, i - 1)),
        })
      })
    })
    return () => ctx.revert()
  }, [project.images])

  return (
    <div ref={containerRef} style={{
      background: 'rgba(8,16,32,0.92)',
      border: '1px solid rgba(0,255,231,0.18)',
      borderRadius: 14, overflow: 'hidden',
      boxShadow: '0 24px 80px rgba(0,0,0,0.55)',
      position: 'relative',
    }}>
      {/* Chrome bar */}
      <div style={{
        padding: '10px 16px', background: 'rgba(4,8,18,0.95)',
        display: 'flex', alignItems: 'center', gap: 14,
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ display: 'flex', gap: 7 }}>
          {['#ff5f56','#ffbd2e','#27c93f'].map(c => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.06)',
          borderRadius: 5, padding: '5px 12px',
          fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-dim)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ color: '#27c93f', fontSize: '0.55rem' }}>●</span>
          {project.liveUrl || 'localhost:5173'}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
              color: 'var(--neon-cyan)', textDecoration: 'none', letterSpacing: '0.1em',
            }}>↗ LIVE</a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
              color: 'var(--text-dim)', textDecoration: 'none', letterSpacing: '0.1em',
            }}>GH</a>
          )}
        </div>
      </div>

      {/* Screenshot */}
      <div style={{ position: 'relative', height: 300, overflow: 'hidden', background: '#030c1e' }}>
        <AnimatePresence mode="wait">
          <motion.div key={currentImg}
            initial={{ opacity: 0, y: 18, scale: 1.02 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.42, ease: [0.4,0,0.2,1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {project.images && project.images.length > 0 ? (
              <img src={project.images[currentImg]} alt={`${project.title} screenshot ${currentImg+1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                background: `linear-gradient(135deg, ${project.color}18, #050a14)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '5rem', opacity: 0.2 }}>{project.emoji}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        {project.images && project.images.length > 1 && (
          <div style={{
            position: 'absolute', bottom: 12, right: 12,
            background: 'rgba(5,10,20,0.85)',
            border: '1px solid rgba(0,255,231,0.25)',
            borderRadius: 20, padding: '5px 12px',
            fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--neon-cyan)',
            display: 'flex', alignItems: 'center', gap: 6,
            backdropFilter: 'blur(8px)',
          }}>
            ↕ scroll · {currentImg + 1}/{project.images.length}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {project.images && project.images.length > 1 && (
        <div style={{
          display: 'flex', gap: 6, padding: '10px 12px',
          background: 'rgba(4,8,18,0.9)', overflowX: 'auto',
        }}>
          {project.images.map((img, i) => (
            <button key={i} onClick={() => setCurrentImg(i)} style={{
              flex: '0 0 44px', height: 32, borderRadius: 4, overflow: 'hidden',
              border: i === currentImg ? `2px solid ${project.color}` : '2px solid transparent',
              padding: 0, cursor: 'none', opacity: i === currentImg ? 1 : 0.5,
              transition: 'all 0.25s',
            }}>
              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const lineRef = useRef(null)
  const [currentImg, setCurrentImg] = useState(0)
  const isEven = index % 2 === 0

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 100, opacity: 0, duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      gap: 64, alignItems: 'center',
      padding: '88px 0', position: 'relative',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div ref={lineRef} style={{
        position: 'absolute', bottom: -1, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent, ${project.color}55, transparent)`,
      }} />

      {/* Image */}
      <div style={{ order: isEven ? 0 : 1, position: 'relative' }}>
        <BrowserMockup project={project} currentImg={currentImg} setCurrentImg={setCurrentImg} />
        <div style={{
          position: 'absolute', bottom: -12, left: '10%', right: '10%', height: 40,
          background: `radial-gradient(ellipse, ${project.color}28 0%, transparent 70%)`,
          filter: 'blur(8px)', pointerEvents: 'none',
        }} />
      </div>

      {/* Content */}
      <div style={{ order: isEven ? 1 : 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: project.color, letterSpacing: '0.3em' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div style={{ flex: 1, height: 1, background: `${project.color}35` }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-dim)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {project.category}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          fontWeight: 900, lineHeight: 1.08,
          color: 'var(--star-white)', marginBottom: 18,
        }}>
          {project.title}
        </h3>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem', color: 'var(--text-dim)',
          lineHeight: 1.75, marginBottom: 24,
        }}>
          {project.description}
        </p>

        <ul style={{ listStyle: 'none', marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {project.highlights.map((h, i) => (
            <motion.li key={i}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                color: 'var(--text-dim)', display: 'flex',
                alignItems: 'flex-start', gap: 10, lineHeight: 1.6,
              }}
            >
              <span style={{ color: project.color, marginTop: 3, fontSize: '0.65rem' }}>▶</span>
              {h}
            </motion.li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {project.stack.map(tech => (
            <span key={tech} style={{
              padding: '4px 12px',
              background: `${project.color}10`,
              border: `1px solid ${project.color}30`,
              borderRadius: 20,
              fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
              color: project.color, letterSpacing: '0.1em',
            }}>
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {project.liveUrl && (
            <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: `0 0 24px ${project.color}45` }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '11px 26px', background: project.color,
                color: 'var(--space-black)', fontFamily: 'var(--font-display)',
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em',
                textDecoration: 'none', borderRadius: 4,
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
            >
              ↗ LIVE DEMO
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.35)', color: 'var(--star-white)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '11px 26px', background: 'transparent',
                color: 'var(--text-dim)', fontFamily: 'var(--font-display)',
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em',
                textDecoration: 'none', borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.14)',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'all 0.3s ease',
              }}
            >
              <GithubIcon /> SOURCE
            </motion.a>
          )}
        </div>
      </div>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}
