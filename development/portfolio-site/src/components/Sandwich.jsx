import { Html, PerspectiveCamera, PresentationControls, QuadraticBezierLine, useHelper } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'

import GetParts from '../components/GetParts.jsx'
import SandwichAnimController from '../components/SandwichAnimController.jsx'
import { CameraHelper } from 'three'

/*
"Sandwich assembly" (https://skfb.ly/ozG7Q) by Harry Charalambous is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
*/

/*
  while transform and occlude="blending" are fun they have poor accessibility, still not the best but better
  "A caveat of transform mode is that on some devices and browsers, 
  the rendered html may appear blurry, as discussed in #859. The issue can be 
  at least mitigated by scaling down the Html parent and scaling up the html children"
  - from Drei README
*/

function HTMLcomponent(props) {
  const { parentNode, visible } = props
  return (
    <group>
      <Html 
        // transform
        portal={{ current: parentNode }}
        occlude//="blending"
        style={{ display: visible ? 'block' : 'none', transform: 'translate(-50%, -50%)' }}
        visible={visible}
      >
        <div>
          {props.children}
        </div>
      </Html>
    </group>
  )
}

function Sandwich(props) {
  if (props.children === undefined) {
    return <></>
  }
  const getChildren = () => {
    if (props.children instanceof Array) {
      return [...props.children]
    } else {
      return [props.children]
    }
  }

  const get = useThree((state) => state.get);
  const parentNode = get().gl.domElement.parentNode
  
  const children = getChildren()
  const numOfChildren = children.length
  const items = GetParts()
  const itemNames = Object.keys(items)
  const getRandomPart = () => items[itemNames[Math.floor(Math.random() * itemNames.length)]]
  const parts = useRef(Array(numOfChildren + 1).fill(0).map((el, i) => [getRandomPart(), getRandomPart()]).flatMap(el => el))

  const [visible, _setVisable] = useState(Array(numOfChildren).fill(0).map(() => false))
  const setVisable = (index) => {
    _setVisable([...Array(6)].map((val, i) => i === index))
  }

  const cam = useRef(null)
  // useHelper(cam, CameraHelper)

  return (
    <group>
      <PresentationControls
        snap={{ mass: 4, tension: 1500 }}
      >
        <SandwichAnimController setVisable={setVisable} cameraRef={cam}>
          {children.reverse().map((val, index) => {
            if (numOfChildren == 1) {
              return [
                items.Bread,
                parts.current[index * 2 + 2],
                parts.current[index * 2 + 3],
                <HTMLcomponent parentNode={parentNode} visible={visible[index]}>
                  {val}
                </HTMLcomponent>,
                parts.current[index * 2],
                parts.current[index * 2 + 1],
                items.Bread,
              ]
            } else {
              return [
                ...(index === 0 ? [items.Bread, parts.current[index * 2 + 2], parts.current[index * 2 + 3]] : []),
                <HTMLcomponent parentNode={parentNode} visible={visible[index]}>
                  {val}
                </HTMLcomponent>,
                parts.current[index * 2],
                parts.current[index * 2 + 1],
                ...(index ===  numOfChildren - 1 ? [items.Bread] : []),
              ]
            }
          }).flatMap((el) => el).map((el, i) => <group receiveShadow castShadow key={i}>{el}</group>)}
        </SandwichAnimController>
      </PresentationControls>
      <PerspectiveCamera makeDefault ref={cam} fov={40} position={[0,70,0]} rotation={[-Math.PI/2, 0,0]}/>
    </group>
  )
}

export default Sandwich;