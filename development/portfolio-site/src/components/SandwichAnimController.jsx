/* eslint-disable react/no-unknown-property */
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { MathUtils } from 'three';
import * as THREE from 'three'
import PropTypes from 'prop-types';

//amount of parts/items between each segment
const partsGap = 3;
// offset consts
const offset = 1.04;
const animOffset = 0.9;
const gap = 16
// peak of the sin wave
const cameraSinMovement = 0.5

export default function SandwichAnimTest(props) {
  const numParts = props.children.length
  const numPages = Math.floor((numParts - 2) / 3)

  const page = useRef(0)
  const partsRef = useRef([]);
  const scroll = useScroll();

  const statingHeight = (numPages - (Math.floor(numPages / partsGap))) + 30
  const curve = useRef(new THREE.QuadraticBezierCurve3(new THREE.Vector3(0,offset * statingHeight + 70,0), new THREE.Vector3(0, ((offset * statingHeight + 70) + 10 + 40) / 2, (0 + 60 + 40) / 2), new THREE.Vector3(0,10,60)))
  const point3 = useRef(new THREE.Vector3())
  
  const [introAnimEnd, setIntroAnimEnd] = useState(false)
  const skipIntroAnim = () => {
    setIntroAnimEnd(true)
    props.cameraRef.current.position.x = 0
    props.cameraRef.current.position.z = 60
    props.cameraRef.current.rotation.x = 0
  }

  useEffect(() => {
    props.setVisable(numPages - 1 - page.current)
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !introAnimEnd) {
        skipIntroAnim()
      }
    })
    return () => {
      window.removeEventListener('keydown')
    }
  }, [])

  useFrame(({clock}) => {
    // ###########
    // scroll animation and float
    // ###########

    // scroll wheel split into 1 / numPages parts 
    const currentPage = Math.floor(scroll.offset / (1/numPages))
    const scrollPos = scroll.curve(currentPage / numPages, 1 / numPages)
    const partIndex = numParts - ((1 + partsGap) + currentPage * partsGap)
    
    if (scrollPos > 0.7) {
      props.setVisable(numPages - 1 - currentPage, scrollPos)
      props.setOpacity(scrollPos)
      page.current = numPages - 1 - currentPage, scrollPos
    } else {
      props.setVisable(-1)
      props.setOpacity(0)
      page.current = -1
    }

    for (let i = 0; i < partsRef.current.length; i++) {
      // create a 'gap' between each segment using the scroll curve, moving smoothly between 'gaps'
      //  also add a sin moment ot the x axis
      // ignore text from starting offset
      const startingOffset = offset * (i - (Math.floor(i / partsGap) + (i === partsRef.current.length - 1 ? -1 : 0))) 
      const scrollOffset = animOffset * gap * scrollPos
      const scrollOffsetModify = (i >= partIndex ? 1 : -1)

      if (partIndex !== i) {
        partsRef.current[i].position.x = 0.4 * Math.sin(clock.getElapsedTime() + (Math.PI/32) * i)
        partsRef.current[i].position.y = startingOffset + scrollOffset * scrollOffsetModify
      } else {
        partsRef.current[i].position.y =  startingOffset - (scrollPos * (offset + 0.01) * animOffset)
      }

    }
    // i want the camera to position itself at the bottom on start of scroll and bottom at the end
    //  then otherwise position camera in 'gaps', moving along with the scroll curve. Also add a bit of sin movement
    const partIndexClamp = Math.max(partIndex, 3)
    // const top = partsRef.current[numParts - 1].position.y;
    // const cameraPosY = top - (offset * (numParts - partIndexClamp)) - animOffset * gap * scrollPos + cameraSinMovement * Math.sin(clock.getElapsedTime())
    const cameraPosY = partsRef.current[partIndexClamp].position.y + cameraSinMovement * Math.sin(clock.getElapsedTime())
    props.cameraRef.current.position.y = cameraPosY
    props.cameraRef.current.position.x = 0
    props.cameraRef.current.position.z = 60
    props.cameraRef.current.rotation.x = 0

    // ###########
    // intro animation
    // ###########
    if (introAnimEnd) {
      return;
    }

    const animationDuration = 5
    if (clock.getElapsedTime() > animationDuration) {
      skipIntroAnim()
      return;
    } else {
      curve.current.v2.set(0,cameraPosY,60) // update new end point to current float y of camera
      const u = Math.pow(Math.min(clock.getElapsedTime() / animationDuration, 1), 4)
      curve.current.getPointAt(u, point3.current)
      props.cameraRef.current.position.y = point3.current.y
      props.cameraRef.current.position.x = point3.current.x
      props.cameraRef.current.position.z = point3.current.z
      props.cameraRef.current.rotation.x = MathUtils.lerp(-Math.PI/2, 0, u)
    }
  })
  
  return <>
    {props.children.map((child, index) => {
      return <group 
        receiveShadow castShadow
        key={index}
        position={[0, offset * index, 0]}
        ref={el => partsRef.current[index] = el}
      >
        {child}
      </group>
    }
    )}
  </>
}
SandwichAnimTest.propTypes = {
  children: PropTypes.node.isRequired,
  cameraRef: PropTypes.object.isRequired,
  setVisable: PropTypes.func.isRequired,
  setOpacity: PropTypes.func.isRequired,
}