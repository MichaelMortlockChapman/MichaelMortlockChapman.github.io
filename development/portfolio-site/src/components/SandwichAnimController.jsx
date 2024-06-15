import { Float, PerspectiveCamera, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

//amount of parts/items between each segment
const partsGap = 3;
// offset consts
const offset = 1.04;
const animOffset = 0.9;
const gap = 14
// peak of the sin wave
const cameraSinMovement = 0.5

export default function SandwichAnimTest(props) {
  const numParts = props.children.length
  const numPages = Math.floor((numParts - 2) / 3)

  const page = useRef(0)
  useEffect(() => {
    props.setVisable(numPages - 1 - page.current)
  }, [])

  const partsRef = useRef([]);
  const scroll = useScroll();

  useFrame(({clock}) => {
    // scroll wheel split into 1 / numPages parts 
    const currentPage = Math.floor(scroll.offset / (1/numPages))
    const scrollPos = scroll.curve(currentPage / numPages, 1 / numPages)
    const partIndex = numParts - ((1 + partsGap) + currentPage * partsGap)
    
    if (scrollPos > 0.75) {
      props.setVisable(numPages - 1 - currentPage)
    } else {
      props.setVisable(-1)
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
        partsRef.current[i].position.y =  startingOffset - (scrollPos * offset * animOffset)
      }

    }
    // i want the camera to position itself at the bottom on start of scroll and bottom at the end
    //  then otherwise position camera in 'gaps', moving along with the scroll curve. Also add a bit of sin movement
    const partIndexClamp = Math.max(partIndex, 3)
    const top = partsRef.current[numParts - 1].position.y;
    const x = top - (offset * (numParts - partIndexClamp)) - animOffset * gap * scrollPos + cameraSinMovement * Math.sin(clock.getElapsedTime())
    props.cameraRef.current.position.y = x
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