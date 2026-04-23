import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../components/ProjectCard'

import sentinel1 from '../assets/projects/sentinel/sentinel1.png'
import sentinel2 from '../assets/projects/sentinel/sentinel2.png'
import sentinel3 from '../assets/projects/sentinel/sentinel3.png'
import sentinel4 from '../assets/projects/sentinel/sentinel4.png'
import sentinel5 from '../assets/projects/sentinel/sentinel5.png'
import sentinel6 from '../assets/projects/sentinel/sentinel6.png'

import golf1 from '../assets/projects/golf/golf1.png'
import golf2 from '../assets/projects/golf/golf2.png'
import golf3 from '../assets/projects/golf/golf3.png'
import golf4 from '../assets/projects/golf/golf4.png'
import golf5 from '../assets/projects/golf/golf5.png'

import focus1 from '../assets/projects/focusflow/focus1.png'
import focus2 from '../assets/projects/focusflow/focus2.png'
import focus3 from '../assets/projects/focusflow/focus3.png'
import focus4 from '../assets/projects/focusflow/focus4.png'
import focus5 from '../assets/projects/focusflow/focus5.png'

import talkify1 from '../assets/projects/talkify/talkify1.png'
import talkify2 from '../assets/projects/talkify/talkify2.png'
import talkify3 from '../assets/projects/talkify/talkify3.png'

import commerce1 from '../assets/projects/commerce/commerce1.png'
import commerce2 from '../assets/projects/commerce/commerce2.png'
import commerce3 from '../assets/projects/commerce/commerce3.png'
import commerce4 from '../assets/projects/commerce/commerce4.png'
import commerce5 from '../assets/projects/commerce/commerce5.png'
import commerce6 from '../assets/projects/commerce/commerce6.png'

import curalink1 from '../assets/projects/curalink/curalink1.png'
import curalink2 from '../assets/projects/curalink/curalink2.png'
import curalink3 from '../assets/projects/curalink/curalink3.png'
import curalink4 from '../assets/projects/curalink/curalink4.png'
import curalink5 from '../assets/projects/curalink/curalink5.png'

gsap.registerPlugin(ScrollTrigger)

const ALL_PROJECTS = [
  {
    title: 'AJ Sentinel',
    category: 'SaaS · Monitoring',
    filterTag: 'SaaS',
    emoji: '🛡️',
    color: '#00ffe7',
    description: 'Production-grade developer monitoring platform comparable to Datadog. Fully automated 24/7 API health checks, auto-incident detection, and real-time WebSocket broadcasting with sub-second latency.',
    highlights: [
      'Async FastAPI + APScheduler backend with time-series metrics in MongoDB Atlas',
      'JWT auth with bcrypt, RBAC, team management & scoped API key generation',
      '7-page animated React dashboard with live p50/p95/p99 latency graphs',
    ],
    stack: ['FastAPI', 'React', 'MongoDB Atlas', 'WebSocket', 'JWT', 'APScheduler', 'Recharts'],
    liveUrl: 'https://aj-sentinel-frontend.onrender.com',
    githubUrl: 'https://github.com/Arjun-hub-create/AJ-Sentinel',
    images: [sentinel1, sentinel2, sentinel3, sentinel4, sentinel5, sentinel6],
  },
  {
    title: 'CuraLink',
    category: 'Platform · Medical AI',
    filterTag: 'Medical',
    emoji: '🧬',
    color: '#00d4ff',
    description: 'Full-stack MERN medical research platform querying PubMed, OpenAlex, and ClinicalTrials.gov in parallel (50–300 results), fed into a Llama 3.3 LLM pipeline via Groq that ranks and annotates the top 6–8 records with relevance scores, key findings, and plain-English summaries in under 10 seconds.',
    highlights: [
      'Engineered structured input with auto query expansion (disease + query combined into optimised API calls), JWT auth with role-based outputs',
      'Persistent multi-turn AI chat sessions stored in MongoDB with clinical trial results integration',
      'Llama 3.3 LLM pipeline via Groq ranking and annotating top records with relevance scores & plain-English summaries',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Groq', 'Llama 3.3', 'JWT', 'PubMed API', 'OpenAlex'],
    liveUrl: 'https://curalink-wheat.vercel.app',
    githubUrl: 'https://github.com/Arjun-hub-create/Curalink-',
    images: [curalink1, curalink2, curalink3, curalink4, curalink5],
  },
  {
    title: 'AJGolfHeroes',
    category: 'Platform · Subscription',
    filterTag: 'Platform',
    emoji: '⛳',
    color: '#b347ff',
    description: 'Full-stack subscription-based golf charity platform with score tracking, a custom draw engine (random + weighted modes), and charity fundraising with tiered prize pool logic.',
    highlights: [
      'Rolling 5-score Stableford logic with automated oldest-entry eviction',
      'Tiered prize pool split (40/35/25%) with jackpot rollover system',
      '8-table PostgreSQL schema on Supabase with Row Level Security & JWT auth',
    ],
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Framer Motion', 'TailwindCSS', 'Vercel'],
    liveUrl: 'https://ajgolfheroes.vercel.app',
    githubUrl: 'https://github.com/Arjun-hub-create/ajgolfheroes',
    images: [golf1, golf2, golf3, golf4, golf5],
  },
  {
    title: 'Focus Flow',
    category: 'SaaS · Productivity',
    filterTag: 'SaaS',
    emoji: '🎯',
    color: '#ff2d78',
    description: 'Real-time team task management platform with Socket.IO collaboration, granular RBAC (Admin/Member roles), and persistent time-tracking for billable-hour accountability.',
    highlights: [
      'Real-time task updates via Socket.IO with granular role-based access control',
      'Optimised MongoDB queries with indexed fields — ~35% faster dashboard loads',
      'Persistent time-tracking system for billable hour accountability',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'RBAC', 'React'],
    liveUrl: 'https://aj-s-focusflow.onrender.com',
    githubUrl: 'https://github.com/Arjun-hub-create/AJ-S-FOCUSFLOW',
    images: [focus1, focus2, focus3, focus4, focus5],
  },
  {
    title: 'Talkify',
    category: 'App · Real-Time',
    filterTag: 'App',
    emoji: '💬',
    color: '#ffd700',
    description: 'Real-time chat application with zero message loss in concurrent load tests via robust Socket.IO event model with isolated namespaces per conversation.',
    highlights: [
      'Zero message loss in concurrent load tests via Socket.IO isolated namespaces',
      'JWT token refresh logic & persistent secure session management',
      'Eliminating repeated logins and improving user retention across sessions',
    ],
    stack: ['Node.js', 'Express.js', 'Socket.IO', 'JWT Auth', 'React'],
    liveUrl: null,
    githubUrl: 'https://github.com/Arjun-hub-create/AJ-S-TALKIFY',
    images: [talkify1, talkify2, talkify3],
  },
  {
    title: 'AJ Thrift Store',
    category: 'E-Commerce · SSR',
    filterTag: 'E-Commerce',
    emoji: '🛍️',
    color: '#00ff88',
    description: 'Full-featured e-commerce storefront with catalogue, cart, authentication, and checkout. Built on Next.js 14 SSR for SEO-optimised pre-rendered pages and dynamic filtering.',
    highlights: [
      'Next.js 14 SSR with getServerSideProps for SEO-optimised pre-rendered pages',
      'Scalable MongoDB product schema with dynamic filtering by category, price & availability',
      'Architected for extensibility toward future search and recommendation features',
    ],
    stack: ['Next.js 14', 'React', 'MongoDB Atlas', 'JWT Auth', 'SSR'],
    liveUrl: null,
    githubUrl: 'https://github.com/Arjun-hub-create/AJ-Thrift-Store',
    images: [commerce1, commerce2, commerce3, commerce4, commerce5, commerce6],
  },
]

const FILTERS = ['All', 'SaaS', 'Platform', 'Medical', 'App', 'E-Commerce']

/* ─── Cinematic counter that ticks up ───────────────────── */
function CountUp({ to, duration = 1.5 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { val: 0 }
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: to, duration,
            ease: 'power2.out',
            onUpdate: () => setVal(Math.floor(obj.val)),
          })
        },
      })
    })
    return () => ctx.revert()
  }, [to, duration])

  return <span ref={ref}>{val}</span>
}

/* ─── Section ─────────────────────────────────────────────── */
export default function ProjectsSection() {
  const sectionRef    = useRef(null)
  const headerRef     = useRef(null)
  const statsRowRef   = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.filterTag === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header lines fly in from left/right
      const spans = headerRef.current.querySelectorAll('.reveal-word')
      gsap.from(spans, {
        y: 90, opacity: 0, rotateX: -30,
        duration: 0.9, stagger: 0.15, ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      })

      // Stats row
      gsap.from(statsRowRef.current.children, {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: statsRowRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: '120px 8% 80px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section bg texture lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(0,255,231,0.015) 80px, rgba(0,255,231,0.015) 81px)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Cinematic Header ───────────────────────────── */}
        <div ref={headerRef} style={{ marginBottom: 56 }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              marginBottom: 24,
            }}
          >
            <div style={{ width: 32, height: 1, background: 'var(--neon-purple)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              color: 'var(--neon-purple)', letterSpacing: '0.4em',
              textTransform: 'uppercase',
            }}>
              03 · Featured Work
            </span>
          </motion.div>

          {/* Big title — overflow hidden per line for clip reveal */}
          <div style={{ overflow: 'hidden', marginBottom: 4 }}>
            <h2 className="reveal-word" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
              fontWeight: 900, lineHeight: 0.95,
              color: 'var(--star-white)',
              display: 'block',
              letterSpacing: '-0.02em',
            }}>
              Projects That
            </h2>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: 28 }}>
            <h2 className="reveal-word" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
              fontWeight: 900, lineHeight: 0.95,
              color: 'var(--neon-cyan)',
              display: 'block',
              letterSpacing: '-0.02em',
              textShadow: '0 0 60px rgba(0,255,231,0.3)',
            }}>
              Actually Ship.
            </h2>
          </div>

          {/* Subtitle + filter row */}
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: 20,
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem', color: 'var(--text-dim)',
              maxWidth: 360, lineHeight: 1.7,
            }}>
              Hover over the browser mockup and scroll down inside it — the screenshots advance forward frame by frame.
            </p>

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {FILTERS.map(f => (
                <motion.button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: '7px 16px',
                    fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                    fontWeight: 600, letterSpacing: '0.15em',
                    textTransform: 'uppercase', cursor: 'none',
                    border: activeFilter === f ? '1px solid var(--neon-cyan)' : '1px solid rgba(255,255,255,0.12)',
                    background: activeFilter === f ? 'rgba(0,255,231,0.12)' : 'transparent',
                    color: activeFilter === f ? 'var(--neon-cyan)' : 'var(--text-dim)',
                    borderRadius: 4, transition: 'all 0.25s ease',
                  }}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats row ──────────────────────────────────── */}
        <div ref={statsRowRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          marginBottom: 64,
          background: 'rgba(0,255,231,0.06)',
          border: '1px solid rgba(0,255,231,0.12)',
          borderRadius: 12,
          overflow: 'hidden',
        }}>
          {[
            { label: 'Projects Built',   value: 6,   suffix: '+', color: '#00ffe7' },
            { label: 'Live Deployments', value: 4,   suffix: '',  color: '#b347ff' },
            { label: 'GitHub Repos',     value: 6,   suffix: '+', color: '#ff2d78' },
            { label: 'Tech Used',        value: 25,  suffix: '+', color: '#ffd700' },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: '24px 28px',
              background: i % 2 === 0 ? 'rgba(5,10,20,0.5)' : 'rgba(8,15,28,0.5)',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 900, color: s.color,
                textShadow: `0 0 20px ${s.color}50`,
                lineHeight: 1,
                marginBottom: 8,
              }}>
                <CountUp to={s.value} />{s.suffix}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
                color: 'var(--text-dim)', letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Project Cards ──────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.length === 0 ? (
              <div style={{
                textAlign: 'center', padding: '80px 0',
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                color: 'var(--text-dim)',
              }}>
                No projects in this category yet. 🚀
              </div>
            ) : (
              filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center', marginTop: 80,
            padding: '48px',
            background: 'rgba(8,18,38,0.7)',
            border: '1px solid rgba(0,255,231,0.12)',
            borderRadius: 16,
            backdropFilter: 'blur(10px)',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,231,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            color: 'var(--text-dim)', letterSpacing: '0.3em',
            marginBottom: 12,
          }}>
            MORE IN THE COSMOS
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: 900, color: 'var(--star-white)',
            marginBottom: 20,
          }}>
            See Everything on GitHub
          </h3>
          <motion.a
            href="https://github.com/Arjun-hub-create"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(0,255,231,0.3)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '13px 36px',
              background: 'transparent',
              border: '1px solid rgba(0,255,231,0.4)',
              color: 'var(--neon-cyan)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.68rem', fontWeight: 700,
              letterSpacing: '0.2em', textDecoration: 'none',
              borderRadius: 4, transition: 'all 0.3s',
            }}
          >
            <GithubIcon /> VIEW ALL REPOS
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}