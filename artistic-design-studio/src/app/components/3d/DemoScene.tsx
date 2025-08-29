'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { OrbitControls, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export interface DemoSceneProps {
  sceneType: string
}

function RoomScene({ sceneType }: { sceneType: string }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  const renderScene = () => {
    switch (sceneType) {
      case 'living-room':
        return (
          <group ref={groupRef}>
            {/* Sofa */}
            <mesh position={[0, 0.5, 0]} scale={[3, 1, 1.5]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.3} />
            </mesh>
            {/* Coffee Table */}
            <mesh position={[0, 0.3, -1]} scale={[2, 0.1, 1]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Side Tables */}
            <mesh position={[2, 0.4, 0.5]} scale={[0.3, 0.8, 0.3]}>
              <cylinderGeometry args={[1, 1, 1, 32]} />
              <meshStandardMaterial color="white" roughness={0.4} />
            </mesh>
            <mesh position={[-2, 0.4, 0.5]} scale={[0.3, 0.8, 0.3]}>
              <cylinderGeometry args={[1, 1, 1, 32]} />
              <meshStandardMaterial color="white" roughness={0.4} />
            </mesh>
          </group>
        )
      case 'bedroom':
        return (
          <group ref={groupRef}>
            {/* Bed */}
            <mesh position={[0, 0.4, 0]} scale={[2.5, 0.8, 4]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.5} />
            </mesh>
            {/* Headboard */}
            <mesh position={[0, 1.2, 1.8]} scale={[2.8, 2, 0.2]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.3} />
            </mesh>
            {/* Nightstands */}
            <mesh position={[1.8, 0.3, 1]} scale={[0.8, 0.6, 0.8]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.4} />
            </mesh>
            <mesh position={[-1.8, 0.3, 1]} scale={[0.8, 0.6, 0.8]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.4} />
            </mesh>
          </group>
        )
      case 'kitchen':
        return (
          <group ref={groupRef}>
            {/* Island */}
            <mesh position={[0, 0.5, 0]} scale={[3, 1, 1.5]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Upper Cabinets */}
            <mesh position={[-2, 1.8, 2]} scale={[2, 1, 0.6]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.3} />
            </mesh>
            <mesh position={[2, 1.8, 2]} scale={[2, 1, 0.6]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.3} />
            </mesh>
            {/* Base Cabinets */}
            <mesh position={[-2, 0.4, 2]} scale={[2, 0.8, 0.6]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.3} />
            </mesh>
            <mesh position={[2, 0.4, 2]} scale={[2, 0.8, 0.6]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.3} />
            </mesh>
          </group>
        )
      case 'study':
        return (
          <group ref={groupRef}>
            {/* Desk */}
            <mesh position={[0, 0.4, 0]} scale={[3, 0.1, 1.5]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.2} metalness={0.1} />
            </mesh>
            {/* Chair */}
            <mesh position={[0, 0.5, -0.5]} scale={[0.4, 1, 0.4]}>
              <cylinderGeometry args={[1, 1, 1, 32]} />
              <meshStandardMaterial color="white" roughness={0.4} />
            </mesh>
            {/* Bookshelves */}
            <mesh position={[-2, 1, 1]} scale={[0.3, 2, 3]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.4} />
            </mesh>
            <mesh position={[2, 1, 1]} scale={[0.3, 2, 3]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.4} />
            </mesh>
          </group>
        )
      default:
        return (
          <group ref={groupRef}>
            <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
              <boxGeometry />
              <meshStandardMaterial color="white" roughness={0.3} />
            </mesh>
          </group>
        )
    }
  }

  return renderScene()
}

export default function DemoScene({ sceneType }: DemoSceneProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Environment */}
          <Environment preset="apartment" />
          
          {/* Scene Content */}
          <RoomScene sceneType={sceneType} />
          
          {/* Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minDistance={3}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}