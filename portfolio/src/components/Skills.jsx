import { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { skills } from '../data'

const RADIUS = 155
const WIRE_RADIUS = 145          // wireframe slightly inside skill sphere
const PERSPECTIVE = 400
const AUTO_VX = 0.0025   // auto-rotation speed around X axis
const AUTO_VY = 0.0055   // auto-rotation speed around Y axis
const LAT_COUNT = 7              // horizontal rings
const LON_COUNT = 12             // vertical meridians
const SEGMENTS  = 48             // segments per line (smoothness)

const categoryColor = {
  frontend: '#a855f7',
  backend:  '#60a5fa',
  database: '#34d399',
  tools:    '#fbbf24',
}

// Distribute N points evenly on a sphere using the Fibonacci/golden-angle method
function fibonacciSphere(n, r) {
  const pts = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const rxy = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = goldenAngle * i
    pts.push([r * rxy * Math.cos(theta), r * y, r * rxy * Math.sin(theta)])
  }
  return pts
}

// Build wireframe lines: latitudes (rings) + longitudes (meridians).
// Each line is an array of [x,y,z] points; lines share the same sphere so
// rotations applied to all of them keep the wireframe consistent.
function buildWireframe(r) {
  const lines = []
  // Latitudes — rings at constant y
  for (let i = 1; i < LAT_COUNT; i++) {
    const phi = (i / LAT_COUNT) * Math.PI - Math.PI / 2 // -π/2 → π/2
    const y = r * Math.sin(phi)
    const rxy = r * Math.cos(phi)
    const ring = []
    for (let j = 0; j <= SEGMENTS; j++) {
      const theta = (j / SEGMENTS) * Math.PI * 2
      ring.push([rxy * Math.cos(theta), y, rxy * Math.sin(theta)])
    }
    lines.push(ring)
  }
  // Longitudes — meridians at constant theta
  for (let i = 0; i < LON_COUNT; i++) {
    const theta = (i / LON_COUNT) * Math.PI * 2
    const meridian = []
    for (let j = 0; j <= SEGMENTS; j++) {
      const phi = (j / SEGMENTS) * Math.PI - Math.PI / 2
      const rxy = r * Math.cos(phi)
      meridian.push([rxy * Math.cos(theta), r * Math.sin(phi), rxy * Math.sin(theta)])
    }
    lines.push(meridian)
  }
  return lines
}

// Rotation matrices
function rotateX(pts, a) {
  const c = Math.cos(a), s = Math.sin(a)
  return pts.map(([x, y, z]) => [x, y * c - z * s, y * s + z * c])
}
function rotateY(pts, a) {
  const c = Math.cos(a), s = Math.sin(a)
  return pts.map(([x, y, z]) => [x * c + z * s, y, -x * s + z * c])
}

// Perspective projection → 2D screen coords + depth info
function project(pts) {
  return pts.map(([x, y, z]) => {
    const scale = PERSPECTIVE / (PERSPECTIVE + z + RADIUS)
    const depth = (z + RADIUS) / (RADIUS * 2) // 0 = back, 1 = front
    return { sx: x * scale, sy: y * scale, z, depth }
  })
}

export default function Skills() {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState(null)

  // 3D positions (mutable, updated every frame without re-render)
  const ptsRef   = useRef(fibonacciSphere(skills.length, RADIUS))
  const wireRef  = useRef(buildWireframe(WIRE_RADIUS))
  const velRef   = useRef({ x: AUTO_VX, y: AUTO_VY })
  const dragRef  = useRef({ active: false, lastX: 0, lastY: 0 })
  const frameRef = useRef(null)

  // Projected 2D positions — only this triggers re-renders
  const [projected, setProjected] = useState(() => project(ptsRef.current))
  const [wireProjected, setWireProjected] = useState(() =>
    wireRef.current.map((line) => project(line))
  )

  useEffect(() => {
    const tick = () => {
      const v = velRef.current
      // Ease back toward auto-rotation when not dragging
      if (!dragRef.current.active) {
        v.x += (AUTO_VX - v.x) * 0.04
        v.y += (AUTO_VY - v.y) * 0.04
      }
      ptsRef.current = rotateX(ptsRef.current, v.x)
      ptsRef.current = rotateY(ptsRef.current, v.y)
      wireRef.current = wireRef.current.map((line) => rotateY(rotateX(line, v.x), v.y))
      setProjected(project(ptsRef.current))
      setWireProjected(wireRef.current.map((line) => project(line)))
      frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  const onPointerDown = useCallback((e) => {
    dragRef.current = { active: true, lastX: e.clientX, lastY: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e) => {
    if (!dragRef.current.active) return
    const dx = e.clientX - dragRef.current.lastX
    const dy = e.clientY - dragRef.current.lastY
    dragRef.current.lastX = e.clientX
    dragRef.current.lastY = e.clientY
    velRef.current.y = dx * 0.006
    velRef.current.x = dy * 0.006
  }, [])

  const onPointerUp = useCallback(() => {
    dragRef.current.active = false
  }, [])

  // Sort back-to-front so front skills render on top
  const sorted = projected
    .map((p, i) => ({ ...p, skill: skills[i], i }))
    .sort((a, b) => a.z - b.z)

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-center"
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            {t('skills.title')}
          </h2>
          <p className="text-white/25 text-sm mt-3">
            Drag to spin
          </p>
        </motion.div>

        {/* Sphere viewport */}
        <motion.div
          className="relative h-[430px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {/* Background glow */}
          <div
            className="absolute w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(59,130,246,0.07) 55%, transparent 70%)',
              filter: 'blur(48px)',
            }}
          />
          {/* Inner core glow */}
          <div
            className="absolute w-40 h-40 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
              filter: 'blur(24px)',
            }}
          />

          {/* Wireframe sphere — rotates with the skills, subtle so it doesn't fight the labels */}
          <svg
            className="absolute pointer-events-none"
            width="430"
            height="430"
            viewBox="-215 -215 430 430"
            style={{ overflow: 'visible' }}
          >
            {wireProjected.map((line, idx) => {
              // Build a polyline for each line, fading by average depth so back-side lines recede
              const avgDepth = line.reduce((acc, p) => acc + p.depth, 0) / line.length
              const points = line.map((p) => `${p.sx},${p.sy}`).join(' ')
              return (
                <polyline
                  key={idx}
                  points={points}
                  fill="none"
                  stroke="rgba(168,85,247,1)"
                  strokeWidth={0.6}
                  strokeOpacity={0.08 + avgDepth * 0.18}
                  strokeLinecap="round"
                />
              )
            })}
          </svg>

          {/* Skill tags */}
          {sorted.map(({ sx, sy, depth, skill, i }) => {
            const color    = categoryColor[skill.category]
            const isHov    = hovered === skill.name
            const opacity  = isHov ? 1 : 0.3 + depth * 0.7
            const fontSize = 0.72 + depth * 0.32   // 0.72 → 1.04 rem

            return (
              <div
                key={skill.name}
                className="absolute"
                style={{
                  left: `calc(50% + ${sx}px)`,
                  top:  `calc(50% + ${sy}px)`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: Math.round(depth * 10) + (isHov ? 20 : 0),
                  /* Stop pointer events from bubbling to the drag container */
                  pointerEvents: 'auto',
                }}
                onPointerDown={(e) => e.stopPropagation()}
                onPointerEnter={() => setHovered(skill.name)}
                onPointerLeave={() => setHovered(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex items-center gap-1.5 whitespace-nowrap font-medium rounded-full cursor-default"
                  style={{
                    fontSize: `${fontSize}rem`,
                    padding: '5px 13px',
                    opacity,
                    background: isHov ? `${color}22` : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${isHov ? color + 'cc' : `rgba(255,255,255,${0.04 + depth * 0.14})`}`,
                    color: isHov ? color : `rgba(255,255,255,${0.5 + depth * 0.5})`,
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow: isHov
                      ? `0 0 18px ${color}55, 0 0 36px ${color}22`
                      : `0 2px 10px rgba(0,0,0,${0.2 + depth * 0.25})`,
                    transition: 'background 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, opacity 0.15s',
                  }}
                >
                  <span style={{ fontSize: '1em' }}>{skill.icon}</span>
                  {skill.name}
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
