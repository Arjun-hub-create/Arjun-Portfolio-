import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function StarField() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const w = window.innerWidth
    const h = window.innerHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000)
    camera.position.z = 1

    // Stars
    const starsGeo = new THREE.BufferGeometry()
    const starCount = 3000
    const positions = new Float32Array(starCount * 3)
    const colors = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200

      const colorChoice = Math.random()
      if (colorChoice < 0.6) {
        colors[i * 3] = 0.9; colors[i * 3 + 1] = 0.95; colors[i * 3 + 2] = 1.0
      } else if (colorChoice < 0.8) {
        colors[i * 3] = 0.0; colors[i * 3 + 1] = 1.0; colors[i * 3 + 2] = 0.9
      } else {
        colors[i * 3] = 0.7; colors[i * 3 + 1] = 0.28; colors[i * 3 + 2] = 1.0
      }
      sizes[i] = Math.random() * 2 + 0.5
    }

    starsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    starsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    starsGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const starsMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    })

    const stars = new THREE.Points(starsGeo, starsMat)
    scene.add(stars)

    // Planets
    const planets = []
    const planetData = [
      { radius: 2.5, color: 0xffd700, x: -25, y: 10, z: -50, speed: 0.003 },
      { radius: 1.8, color: 0x00ffe7, x: 30, y: -8, z: -60, speed: 0.002 },
      { radius: 3.5, color: 0xb347ff, x: -40, y: -15, z: -80, speed: 0.001 },
      { radius: 1.2, color: 0xff2d78, x: 45, y: 20, z: -70, speed: 0.004 },
    ]

    planetData.forEach(p => {
      const geo = new THREE.SphereGeometry(p.radius, 32, 32)
      const mat = new THREE.MeshPhongMaterial({
        color: p.color,
        emissive: p.color,
        emissiveIntensity: 0.15,
        shininess: 30,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(p.x, p.y, p.z)
      scene.add(mesh)

      // Ring
      const ringGeo = new THREE.TorusGeometry(p.radius * 1.7, p.radius * 0.15, 8, 64)
      const ringMat = new THREE.MeshBasicMaterial({ color: p.color, transparent: true, opacity: 0.4 })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.rotation.x = Math.PI * 0.35
      mesh.add(ring)

      planets.push({ mesh, speed: p.speed })
    })

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x223366, 1)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0x00ffe7, 2, 200)
    pointLight.position.set(10, 20, 10)
    scene.add(pointLight)

    let scrollY = 0
    const handleScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', handleScroll)

    let mouseX = 0, mouseY = 0
    const handleMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3
    }
    window.addEventListener('mousemove', handleMouse)

    let frame
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = Date.now() * 0.001

      stars.rotation.y = t * 0.015 + mouseX * 0.2
      stars.rotation.x = mouseY * 0.1

      planets.forEach(p => {
        p.mesh.rotation.y += p.speed
      })

      camera.position.y = -scrollY * 0.003

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const nw = window.innerWidth
      const nh = window.innerHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
