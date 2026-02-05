'use client'

import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// 3D Car Component
function Car3D({ scale = 1, color = '#ef4444' }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.05 : 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Car body */}
        <boxGeometry args={[1.5, 0.5, 0.8]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={hovered ? 0.2 : 0}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Car top */}
      <mesh position={[0, 0.4, 0]} scale={scale}>
        <boxGeometry args={[0.8, 0.4, 0.7]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Wheels */}
      {[[-0.5, -0.3, 0.5], [0.5, -0.3, 0.5], [-0.5, -0.3, -0.5], [0.5, -0.3, -0.5]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]} scale={scale}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#1f2937" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
    </Float>
  )
}

// 3D Bird/Mockingjay Component
function Bird3D({ scale = 1, color = '#fbbf24' }) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const wingRef1 = useRef<THREE.Mesh>(null)
  const wingRef2 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += hovered ? 0.03 : 0.005
    }
    if (wingRef1.current && wingRef2.current) {
      const flapSpeed = hovered ? 8 : 3
      wingRef1.current.rotation.z = Math.sin(state.clock.elapsedTime * flapSpeed) * 0.5
      wingRef2.current.rotation.z = -Math.sin(state.clock.elapsedTime * flapSpeed) * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group
        ref={groupRef}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Body */}
        <mesh>
          <sphereGeometry args={[0.4, 16, 16]} />
          <MeshDistortMaterial
            color={color}
            speed={2}
            distort={hovered ? 0.15 : 0}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        {/* Head */}
        <mesh position={[0.4, 0.2, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
        </mesh>
        {/* Beak */}
        <mesh position={[0.65, 0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <coneGeometry args={[0.08, 0.2, 8]} />
          <meshStandardMaterial color="#f97316" metalness={0.4} roughness={0.5} />
        </mesh>
        {/* Wings */}
        <mesh ref={wingRef1} position={[0, 0, 0.35]}>
          <boxGeometry args={[0.6, 0.05, 0.4]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh ref={wingRef2} position={[0, 0, -0.35]}>
          <boxGeometry args={[0.6, 0.05, 0.4]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Tail */}
        <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 8]}>
          <boxGeometry args={[0.4, 0.02, 0.3]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

// 3D Fire Component
function Fire3D({ scale = 1 }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.2
      meshRef.current.rotation.y += 0.02
    }
  })

  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <coneGeometry args={[0.4, 1, 8]} />
        <MeshDistortMaterial
          color={hovered ? '#fbbf24' : '#f97316'}
          speed={5}
          distort={0.4}
          metalness={0.1}
          roughness={0.8}
          emissive={hovered ? '#ef4444' : '#f97316'}
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0, 0.3, 0]} scale={scale * 0.6}>
        <coneGeometry args={[0.25, 0.6, 8]} />
        <MeshDistortMaterial
          color="#fbbf24"
          speed={6}
          distort={0.5}
          emissive="#fbbf24"
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  )
}

// 3D Arrow Component
function Arrow3D({ scale = 1, color = '#059669' }) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.1
      if (hovered) {
        groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 10) * 0.1
      }
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <group
        ref={groupRef}
        scale={scale}
        rotation={[0, 0, -Math.PI / 4]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Arrow shaft */}
        <mesh>
          <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
          <meshStandardMaterial color="#8b5a2b" metalness={0.3} roughness={0.7} />
        </mesh>
        {/* Arrow head */}
        <mesh position={[0, 0.7, 0]}>
          <coneGeometry args={[0.12, 0.3, 8]} />
          <MeshDistortMaterial
            color={color}
            speed={2}
            distort={hovered ? 0.2 : 0}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Feathers */}
        <mesh position={[0, -0.55, 0.08]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[0.02, 0.2, 0.1]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
        <mesh position={[0, -0.55, -0.08]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.02, 0.2, 0.1]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
      </group>
    </Float>
  )
}

// Canvas wrapper with loading fallback
function Icon3DCanvas({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97316" />
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}

// Animated SVG Fallback Icons
export function CarIcon({ className = '', animate = true }: { className?: string; animate?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={className}
      whileHover={{ scale: 1.1, rotate: 5 }}
      animate={animate ? { y: [0, -5, 0] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <defs>
        <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      {/* Car body */}
      <path
        d="M8 36 L12 28 L24 24 L40 24 L52 28 L56 36 L56 44 L8 44 Z"
        fill="url(#carGradient)"
      />
      {/* Windows */}
      <path
        d="M16 28 L24 26 L24 34 L14 34 Z"
        fill="#1e293b"
      />
      <path
        d="M28 26 L40 26 L50 34 L28 34 Z"
        fill="#1e293b"
      />
      {/* Wheels */}
      <circle cx="18" cy="44" r="6" fill="#1f2937" />
      <circle cx="18" cy="44" r="3" fill="#374151" />
      <circle cx="46" cy="44" r="6" fill="#1f2937" />
      <circle cx="46" cy="44" r="3" fill="#374151" />
      {/* Headlights */}
      <rect x="52" y="32" width="4" height="4" rx="1" fill="#fbbf24" />
      <rect x="8" y="32" width="4" height="4" rx="1" fill="#fbbf24" />
    </motion.svg>
  )
}

export function BirdIcon({ className = '', animate = true }: { className?: string; animate?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={className}
      whileHover={{ scale: 1.1 }}
      animate={animate ? { y: [0, -8, 0], rotate: [0, 2, -2, 0] } : {}}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <defs>
        <linearGradient id="birdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Body */}
      <ellipse cx="32" cy="36" rx="12" ry="10" fill="url(#birdGradient)" />
      {/* Head */}
      <circle cx="44" cy="28" r="8" fill="url(#birdGradient)" />
      {/* Beak */}
      <polygon points="52,28 60,26 52,30" fill="#f97316" />
      {/* Eye */}
      <circle cx="46" cy="26" r="2" fill="#1f2937" />
      {/* Wings */}
      <motion.path
        d="M20 32 Q8 20 16 16 Q24 20 28 32 Z"
        fill="#f59e0b"
        animate={animate ? { d: ["M20 32 Q8 20 16 16 Q24 20 28 32 Z", "M20 32 Q8 28 16 24 Q24 28 28 32 Z"] } : {}}
        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* Tail */}
      <polygon points="20,36 8,32 8,40 20,40" fill="#f59e0b" />
    </motion.svg>
  )
}

export function FireIcon({ className = '', animate = true }: { className?: string; animate?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={className}
      whileHover={{ scale: 1.2 }}
      animate={animate ? { scale: [1, 1.05, 1], y: [0, -2, 0] } : {}}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      <defs>
        <linearGradient id="fireGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <motion.path
        d="M32 4 Q48 20 44 36 Q48 28 52 36 Q56 52 32 60 Q8 52 12 36 Q16 28 20 36 Q16 20 32 4 Z"
        fill="url(#fireGradient)"
        animate={animate ? {
          d: [
            "M32 4 Q48 20 44 36 Q48 28 52 36 Q56 52 32 60 Q8 52 12 36 Q16 28 20 36 Q16 20 32 4 Z",
            "M32 6 Q46 22 42 34 Q46 26 50 34 Q54 50 32 58 Q10 50 14 34 Q18 26 22 34 Q18 22 32 6 Z"
          ]
        } : {}}
        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
      />
      <path
        d="M32 24 Q40 32 38 44 Q44 52 32 56 Q20 52 26 44 Q24 32 32 24 Z"
        fill="#fef3c7"
        opacity={0.8}
      />
    </motion.svg>
  )
}

export function ArrowIcon({ className = '', animate = true }: { className?: string; animate?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={className}
      whileHover={{ scale: 1.1, x: 10 }}
      animate={animate ? { x: [0, 5, 0] } : {}}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <defs>
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      {/* Shaft */}
      <rect x="8" y="30" width="40" height="4" rx="2" fill="#92400e" />
      {/* Arrow head */}
      <polygon points="48,32 64,32 56,20" fill="url(#arrowGradient)" />
      <polygon points="48,32 64,32 56,44" fill="url(#arrowGradient)" />
      {/* Feathers */}
      <polygon points="8,30 4,24 12,28" fill="#ef4444" />
      <polygon points="8,34 4,40 12,36" fill="#dc2626" />
    </motion.svg>
  )
}

// Export 3D versions for use in specific sections
export { Icon3DCanvas, Car3D, Bird3D, Fire3D, Arrow3D }

// Combined icon component that chooses between 3D and SVG based on context
export function Icon3D({ 
  type, 
  className = '', 
  use3D = false 
}: { 
  type: 'car' | 'bird' | 'fire' | 'arrow'
  className?: string
  use3D?: boolean
}) {
  if (use3D) {
    return (
      <Icon3DCanvas className={className}>
        {type === 'car' && <Car3D />}
        {type === 'bird' && <Bird3D />}
        {type === 'fire' && <Fire3D />}
        {type === 'arrow' && <Arrow3D />}
      </Icon3DCanvas>
    )
  }

  switch (type) {
    case 'car':
      return <CarIcon className={className} />
    case 'bird':
      return <BirdIcon className={className} />
    case 'fire':
      return <FireIcon className={className} />
    case 'arrow':
      return <ArrowIcon className={className} />
    default:
      return null
  }
}
