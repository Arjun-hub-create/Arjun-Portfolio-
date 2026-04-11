import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    let raf
    const animateFollower = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12
      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`
        followerRef.current.style.top = `${followerPos.current.y}px`
      }
      raf = requestAnimationFrame(animateFollower)
    }
    raf = requestAnimationFrame(animateFollower)

    const onEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2)'
        cursorRef.current.style.background = 'var(--neon-purple)'
      }
    }
    const onLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
        cursorRef.current.style.background = 'var(--neon-cyan)'
      }
    }

    document.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
