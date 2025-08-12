import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Environment, ContactShadows } from '@react-three/drei'

type ThreeHeroProps = {
  primary: string
  secondary: string
  accent: string
  background: string
  text?: string
  heading?: string
  subheading?: string
}

export default function ThreeHero(props: ThreeHeroProps) {
  const { primary, secondary, accent, background, text = '#ffffff', heading = 'Interior Design Studio', subheading = 'Spaces that feel like you' } = props

  const colors = useMemo(
    () => ({ primary, secondary, accent, background, text }),
    [primary, secondary, accent, background, text]
  )

  return (
    <div style={{ height: '70vh', width: '100%', borderRadius: 16, overflow: 'hidden' }}>
      <Canvas shadows camera={{ position: [4, 3, 7], fov: 50 }}>
        <color attach="background" args={[colors.background]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow shadow-mapSize={[2048, 2048]} />
        <Suspense fallback={null}>
          <group position={[0, -0.5, 0]}>
            <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
              <mesh castShadow position={[-1.5, 1.2, 0]}>
                <torusKnotGeometry args={[0.6, 0.2, 128, 16]} />
                <meshStandardMaterial color={colors.primary} metalness={0.3} roughness={0.3} />
              </mesh>

              <mesh castShadow position={[1.2, 0.9, -0.6]} rotation={[0.3, 0.8, 0.2]}>
                <dodecahedronGeometry args={[0.8, 0]} />
                <meshStandardMaterial color={colors.secondary} metalness={0.2} roughness={0.4} />
              </mesh>

              <mesh castShadow position={[0, 0.5, 1.1]} rotation={[0.7, 0.1, -0.2]}>
                <icosahedronGeometry args={[0.7, 0]} />
                <meshStandardMaterial color={colors.accent} metalness={0.1} roughness={0.5} />
              </mesh>
            </Float>

            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
              <circleGeometry args={[8, 64]} />
              <meshStandardMaterial color={colors.background} />
            </mesh>

            <ContactShadows position={[0, -0.1, 0]} opacity={0.4} scale={10} blur={2.2} far={4} />
          </group>

          <Text3D font="https://raw.githubusercontent.com/pmndrs/drei-assets/master/fonts/Inter_Bold.json" size={0.5} height={0.1} position={[-2.8, 2.2, 0]}>
            {heading}
            <meshStandardMaterial color={colors.primary} />
          </Text3D>

          <Text3D font="https://raw.githubusercontent.com/pmndrs/drei-assets/master/fonts/Inter_Regular.json" size={0.25} height={0.05} position={[-2.6, 1.6, 0]}>
            {subheading}
            <meshStandardMaterial color={colors.text} />
          </Text3D>

          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.05} />
      </Canvas>
    </div>
  )
}


