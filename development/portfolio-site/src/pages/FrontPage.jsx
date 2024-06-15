import { Environment, Html, PerspectiveCamera, Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

import GetParts from '../components/GetParts.jsx'

/*
"Sandwich assembly" (https://skfb.ly/ozG7Q) by Harry Charalambous is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
*/

function MakeSandwich(segments) {
  const items = GetParts()
  const sandwich = []

  const offset = 1.05;
  let count = 0;
  const addPart = (part) => {
    sandwich.push(
      <group key={count}>
        {part}
      </group>
    )
    count++
  }
  const itemNames = Object.keys(items)
  const getRandomPart = () => items[itemNames[Math.floor(Math.random() * itemNames.length)]]
  
  addPart(items.Bread)
  for (let i = 0; i < segments; i++) {
    addPart(getRandomPart())
    addPart(getRandomPart())
  }
  addPart(items.Bread)

  return sandwich
}

function SandwichAnimTest(props) {
  const textRef = useRef(false)
  const cameraRef = useRef(false)
  const partsRef = useRef([]);
  useEffect(() => {
    partsRef.current = partsRef.current.slice(0, props.sandwich.length)
  }, [props.sandwich])
  
  const scroll = useScroll();

  //amount of parts/items between each segment
  const partsGap = 2;
  // offset consts
  const offset = 1.04;
  const animOffset = 0.9;
  const gap = 14
  // peak of the sin wave
  const cameraSinMovement = 2

  const numPages = Math.floor((props.sandwich.length - 2) / 2)

  useFrame(({clock}) => {
    // scroll wheel split into 1 / numPages parts 
    const page = Math.floor(scroll.offset / (1/numPages))
    const scrollPos = scroll.curve(page / numPages, 1 / numPages)
    const partIndex = props.sandwich.length - ((1 + partsGap) + page * partsGap)

    for (let i = 0; i < partsRef.current.length; i++) {
      // create a 'gap' between each segment using the scroll curve, moving smoothly between 'gaps'
      //  also add a sin moment ot the x axis
      const startingOffset = offset * i 
      const scrollOffset = animOffset * gap * scrollPos
      const scrollOffsetModify = (i >= partIndex ? 1 : -1)

      partsRef.current[i].position.y = startingOffset + scrollOffset * scrollOffsetModify
      partsRef.current[i].position.x = Math.sin(clock.getElapsedTime() + Math.PI/8 * i)
    }
    // i want the camera to position itself at the bottom on start of scroll and bottom at the end
    //  then otherwise position camera in 'gaps', moving along with the scroll curve. Also add a bit of sin movement
    const partIndexClamp = Math.max(partIndex, 1)
    const top = partsRef.current[props.sandwich.length - 1].position.y;
    const x = top - (offset * (props.sandwich.length - partIndexClamp)) - animOffset * gap * scrollPos + cameraSinMovement * Math.sin(clock.getElapsedTime())
    cameraRef.current.position.y = x
  })
  console.log('hi');

  return (
    <>
      <group ref={cameraRef} position={[0,10,60]} scale={[15,15,15]} rotation={[0, 0,0]}>
        <PerspectiveCamera makeDefault/>
      </group>
      <Html ref={textRef}>
        <h1>WORLD!!!!!</h1>
      </Html>
      <group>
        {props.sandwich.map((part, index) => 
          <group 
            key={index}
            position={[0, offset * index, 0]}
            ref={el => partsRef.current[index] = el}
          >
            {part}
          </group>
        )}
      </group>
    </>
  )
}

export default function ThreeFrontPage () {
  const items = GetParts()
  const sandwich = MakeSandwich(12)
  return (
    <div style={{ height: '100vh' }}>
      <Canvas dpr={2}>
        <Environment preset="sunset" background/>
        {/* <OrbitControls/> */}
        <ScrollControls pages={1} damping={0.1}>
          <Scroll style={{ width: '100%' }}>
            <SandwichAnimTest sandwich={sandwich}/>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <div style={{ position: 'absolute', top: '0px' }}>
        <h1>HELLO!!!!</h1>
      </div>
    </div>
  )
}
