import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fade-in-up animation triggered when element enters viewport
 * @param {object} opts - { y, duration, delay, stagger }
 */
export function useReveal(opts = {}) {
  const ref = useRef(null)
  const { y = 60, duration = 0.9, delay = 0, stagger = 0 } = opts

  useEffect(() => {
    if (!ref.current) return
    const targets = stagger ? ref.current.children : ref.current

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        opacity: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * Parallax effect on scroll
 * @param {number} speed - multiplier for parallax distance
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: () => -window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [speed])

  return ref
}
