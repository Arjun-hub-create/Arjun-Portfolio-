import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../components/ProjectCard'

// Import images
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

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'AJ Sentinel',
    category: 'SaaS · Monitoring',
    emoji: '🛡️',
    color: '#00ffe7',
    description: 'Production-grade developer monitoring platform comparable to Datadog. Fully automated 24/7 API health checks, auto-incident detection, and real-time WebSocket broadcasting with sub-second latency.',
    highlights: [
      'Async FastAPI + APScheduler backend with time-series metrics in MongoDB Atlas',
      'JWT auth with bcrypt, RBAC, team management & scoped API key generation',
      '7-page animated React dashboard with live latency graphs (p50/p95/p99)',
    ],
    stack: ['FastAPI', 'React', 'MongoDB Atlas', 'WebSocket', 'JWT', 'APScheduler', 'Recharts'],
    liveUrl: 'https://aj-sentinel-frontend.onrender.com',
    githubUrl: 'https://github.com/Arjun-hub-create/AJ-Sentinel',
    images: [sentinel1, sentinel2, sentinel3, sentinel4, sentinel5, sentinel6],
  },
  {
    title: 'AJGolfHeroes',
    category: 'Platform · Subscription',
    emoji: '⛳',
    color: '#b347ff',
    description: 'Full-stack subscription-based golf charity platform with score tracking, custom draw engine (random and weighted modes), and charity fundraising with tiered prize pool logic.',
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
    emoji: '💬',
    color: '#ffd700',
    description: 'Real-time chat application with zero message loss in concurrent load tests via robust Socket.IO event model with isolated namespaces per conversation.',
    highlights: [
      'Zero message loss in concurrent load tests via Socket.IO isolated namespaces',
      'JWT token refresh logic & persistent secure session management',
      'Eliminating repeated logins and improving user retention',
    ],
    stack: ['Node.js', 'Express.js', 'Socket.IO', 'JWT Auth', 'React'],
    liveUrl: null,
    githubUrl: 'https://github.com/Arjun-hub-create/AJ-S-TALKIFY',
    images: [talkify1, talkify2, talkify3],
  },
  {
    title: 'AJ Thrift Store',
    category: 'E-Commerce · SSR',
    emoji: '🛍️',
    color: '#00ff88',
    description: 'Full-featured e-commerce storefront with catalogue, cart, authentication, and checkout using Next.js 14 SSR for SEO-optimised pre-rendered pages.',
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

export default function ProjectsSection() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
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
      {/* Header */}
      <div ref={headerRef} style={{ marginBottom: 40, maxWidth: 1100, margin: '0 auto 40px' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--neon-purple)',
          letterSpacing: '0.4em',
          marginBottom: 16,
          textTransform: 'uppercase',
        }}>02 · Featured Work</div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--star-white)',
            lineHeight: 1.05,
          }}>
            Projects That<br />
            <span style={{ color: 'var(--neon-cyan)' }}>Ship.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-dim)',
            maxWidth: 320,
            lineHeight: 1.6,
          }}>
            Hover over screenshots & scroll to preview all project images.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
