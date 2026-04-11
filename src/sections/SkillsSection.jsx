import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
  {
    label: 'Frontend',
    color: '#00ffe7',
    icon: '🖥️',
    skills: ['React.js', 'Next.js 14', 'HTML5', 'CSS3', 'JavaScript ES6+', 'TailwindCSS', 'Framer Motion'],
  },
  {
    label: 'Backend',
    color: '#b347ff',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'REST APIs', 'Socket.IO', 'WebSocket', 'JWT Auth'],
  },
  {
    label: 'Database',
    color: '#ff2d78',
    icon: '🗄️',
    skills: ['MongoDB', 'MongoDB Atlas', 'MSSQL', 'PostgreSQL', 'Supabase'],
  },
  {
    label: 'Tools & Cloud',
    color: '#ffd700',
    icon: '🚀',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Azure', 'Render', 'Vercel', 'Recharts', 'APScheduler'],
  },
  {
    label: 'Practices',
    color: '#00ff88',
    icon: '📐',
    skills: ['Agile/Scrum', 'RESTful Architecture', 'RBAC', 'CI/CD Basics', 'SSR/SSG'],
  },
]

export default function SkillsSection() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
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
      id="skills"
      ref={sectionRef}
      style={{
        padding: '120px 8%',
        position: 'relative',
        zIndex: 2,
        background: 'linear-gradient(180deg, transparent, rgba(5,10,20,0.96), transparent)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 64, textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--neon-purple)',
            letterSpacing: '0.4em',
            marginBottom: 16,
          }}>03 · SKILLS</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            color: 'var(--star-white)',
          }}>
            Tech <span style={{ color: 'var(--neon-cyan)' }}>Arsenal</span>
          </h2>
        </div>

        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 24,
        }}>
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              whileHover={{ y: -8, boxShadow: `0 20px 60px ${group.color}20` }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(10,22,40,0.8)',
                border: `1px solid ${group.color}25`,
                borderRadius: 12,
                padding: 28,
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
              }} />

              <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{group.icon}</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: group.color,
                letterSpacing: '0.15em',
                marginBottom: 16,
                textTransform: 'uppercase',
              }}>
                {group.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    padding: '4px 10px',
                    background: `${group.color}10`,
                    border: `1px solid ${group.color}30`,
                    borderRadius: 20,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.05em',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
