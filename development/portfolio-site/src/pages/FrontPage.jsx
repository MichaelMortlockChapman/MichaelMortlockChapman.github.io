import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Sandwich from '../components/Sandwich'
import { Suspense } from 'react'
import Profile from '../components/Profile'
import Test from '../components/Test'

export default function ThreeFrontPage () {
  return (
    <div style={{ height: '100vh', background: '#2d4967' }}>
      <Suspense fallback={null}>
        <Canvas dpr={[1,2]} shadows gl={{antialias: true}} camera={{position: [70,70,70]}}>
          <ScrollControls pages={2} damping={0.1}>
            <Scroll style={{ width: '100%' }}>
              <Sandwich>
                <Profile/>
                <Test/>
              </Sandwich>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </div>
  )
}
