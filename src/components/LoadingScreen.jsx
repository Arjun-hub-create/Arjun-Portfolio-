import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ progress }) {
  const isDone = progress >= 100

  return (
    <AnimatePresence>
      {!isDone || progress < 100 ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--space-black)',
            zIndex: 100000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Stars bg */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  background: 'white',
                  borderRadius: '50%',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
              />
            ))}
          </div>

          {/* UFO SVG */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ marginBottom: 40, zIndex: 1 }}
          >
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Beam */}
              <polygon points="45,55 75,55 85,80 35,80" fill="url(#beam)" opacity="0.3"/>
              <defs>
                <linearGradient id="beam" x1="60" y1="55" x2="60" y2="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00ffe7" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#00ffe7" stopOpacity="0"/>
                </linearGradient>
              </defs>
              {/* Body */}
              <ellipse cx="60" cy="48" rx="35" ry="12" fill="#b347ff"/>
              <ellipse cx="60" cy="48" rx="35" ry="12" fill="url(#bodyGrad)" opacity="0.5"/>
              <defs>
                <linearGradient id="bodyGrad" x1="25" y1="36" x2="95" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ff2d78"/>
                  <stop offset="100%" stopColor="#b347ff"/>
                </linearGradient>
              </defs>
              {/* Dome */}
              <ellipse cx="60" cy="44" rx="18" ry="10" fill="#1a2a4a"/>
              <ellipse cx="60" cy="44" rx="18" ry="10" fill="none" stroke="#00ffe7" strokeWidth="1.5"/>
              {/* Lights */}
              <circle cx="38" cy="50" r="4" fill="#00ffe7" opacity="0.9"/>
              <circle cx="52" cy="53" r="3.5" fill="#ffd700" opacity="0.9"/>
              <circle cx="68" cy="53" r="3.5" fill="#ff2d78" opacity="0.9"/>
              <circle cx="82" cy="50" r="4" fill="#00ffe7" opacity="0.9"/>
              {/* Shine on dome */}
              <ellipse cx="54" cy="40" rx="5" ry="3" fill="white" opacity="0.15"/>
            </svg>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ zIndex: 1, textAlign: 'center', marginBottom: 60 }}
          >
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '0.2em',
              color: 'var(--neon-cyan)',
              textShadow: '0 0 40px rgba(0,255,231,0.6), 0 0 80px rgba(0,255,231,0.3)',
            }}>
              AJ PIX
            </h1>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.4em',
              color: 'var(--text-dim)',
              marginTop: 8,
              textTransform: 'uppercase',
            }}>
              Initializing Launch Sequence
            </p>
          </motion.div>

          {/* Progress bar */}
          <div style={{ width: 300, zIndex: 1 }}>
            <div style={{
              width: '100%',
              height: 2,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 2,
              overflow: 'hidden',
            }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))',
                  boxShadow: '0 0 10px var(--neon-cyan)',
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 12,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-dim)',
            }}>
              <span>LOADING UNIVERSE</span>
              <span style={{ color: 'var(--neon-cyan)' }}>{Math.floor(progress)}%</span>
            </div>
          </div>

          {/* Orbiting dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: 200, height: 200,
              border: '1px dashed rgba(0,255,231,0.1)',
              borderRadius: '50%',
              bottom: '15%',
            }}
          >
            <div style={{
              width: 8, height: 8,
              background: 'var(--neon-cyan)',
              borderRadius: '50%',
              position: 'absolute',
              top: -4, left: '50%',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px var(--neon-cyan)',
            }} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
