'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useMemo } from 'react'
import { OrbitControls, Float, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingPanels() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const panels = useMemo(() => {
    const panelConfigs = [
      { position: [2, 1, 0], rotation: [0, 0, 0.2], scale: [2, 3, 0.1] },
      { position: [-2, -1, 1], rotation: [0.3, 0, -0.1], scale: [1.5, 2.5, 0.1] },
      { position: [0, 2, -2], rotation: [-0.2, 0.5, 0], scale: [3, 2, 0.1] },
      { position: [3, -2, -1], rotation: [0.1, -0.3, 0.4], scale: [1, 4, 0.1] },
      { position: [-3, 0, 2], rotation: [0, 0.8, -0.2], scale: [2.5, 1.5, 0.1] },
    ]
    
    return panelConfigs.map((config, index) => (
      <Float
        key={index}
        speed={1 + index * 0.2}
        rotationIntensity={0.3}
        floatIntensity={0.5}
      >
        <mesh
          position={config.position as [number, number, number]}
          rotation={config.rotation as [number, number, number]}
          scale={config.scale as [number, number, number]}
        >
          <boxGeometry />
          <meshStandardMaterial
            color="white"
            transparent
            opacity={0.8}
            roughness={0.1}
            metalness={0.2}
          />
          {/* Wireframe overlay */}
          <mesh>
            <boxGeometry />
            <meshBasicMaterial
              color="white"
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </mesh>
      </Float>
    ))
  }, [])

  return <group ref={groupRef}>{panels}</group>
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 100
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      
      colors[i * 3] = 1
      colors[i * 3 + 1] = 1
      colors[i * 3 + 2] = 1
    }
    
    return { positions, colors, count }
  }, [])
  
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
          count={particles.count}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
          count={particles.count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        transparent
        opacity={0.6}
        vertexColors
        sizeAttenuation
      />
    </points>
  )
}
export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* Environment */}
          <Environment preset="city" />
          
          {/* 3D Elements */}
          <FloatingPanels />
          <ParticleField />
          
          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}