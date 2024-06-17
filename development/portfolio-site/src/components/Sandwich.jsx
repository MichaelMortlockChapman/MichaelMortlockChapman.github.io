/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
import { Html, PerspectiveCamera, PresentationControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import PropTypes from 'prop-types';

import GetParts from '../components/GetParts.jsx'
import SandwichAnimController from '../components/SandwichAnimController.jsx'

/*
"Sandwich assembly" (https://skfb.ly/ozG7Q) by Harry Charalambous is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
*/

/*
  not using transform here as it has slightly better accessibility, also always faces camera which is important for the info included
    "A caveat of transform mode is that on some devices and browsers, 
    the rendered html may appear blurry, as discussed in #859. The issue can be 
    at least mitigated by scaling down the Html parent and scaling up the html children"
    - from Drei README
*/
function HTMLcomponent({ parentNode, visible, divOpacity, children }) {
  return (
    <group>
      <Html 
        // transform
        portal={{ current: parentNode }}
        occlude//="blending"
        style={{ display: visible? 'block' : 'none', transform: 'translate(-50%, -50%)', opacity: divOpacity }}
        visible={visible}
      >
        {children}
      </Html>
    </group>
  )
}
HTMLcomponent.propTypes = {
  parentNode: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  divOpacity: PropTypes.number.isRequired,
}

export default function Sandwich(props) {
  // can't have a sandwich without any items, also logic stuffs up when children zero
  //  kinda already using a hack with getChildren and what happens in the SandwichAnimController map
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
  
  const children = useRef(getChildren().reverse())
  const items = useRef(GetParts())
  const numOfChildren = children.current.length
  const itemNames = Object.keys(items.current)
  const getRandomPart = () => items.current[itemNames[Math.floor(Math.random() * itemNames.length)]]
  const parts = useRef(Array(numOfChildren + 1).fill(0).map(() => [getRandomPart(), getRandomPart()]).flatMap(el => el))

  const [divOpacity, updateOpacity] = useState(0)
  const setOpacity = (val) => {
    // ignore when val the same also round to 2dp so set isn't called as much (looks fine still)
    //  saves all lot as useFrame in animContoller calls this ~60times per s
    const rounded = Math.round((val + Number.EPSILON) * 100) / 100
    if (divOpacity !== rounded) {
      updateOpacity(rounded > 0.85 ? 1 : rounded)
    }
  } 

  const [visible, updateVisable] = useState(Array(numOfChildren).fill(false))
  const setVisable = (index) => {
    // ignore when -1 (all non visable flag) and all alread visable or when index is alread true
    if ((index === -1 && visible.filter((val) => val).length !== 0) || (index !== -1 && visible[index] === false)) {
      updateVisable([...Array(numOfChildren)].map((_, i) => i === index))
    }
  }

  const cam = useRef(null)

  return (
    <group>
      <PresentationControls
        snap={{ mass: 4, tension: 1500 }}
      >
        <SandwichAnimController setVisable={setVisable} setOpacity={setOpacity} cameraRef={cam}>
          {children.current.map((val, index) => {
            if (numOfChildren == 1) {
              // if you only have 1 child make entire sandwich
              return [
                items.current.Bread,
                parts.current[index * 2 + 2],
                parts.current[index * 2 + 3],
                <HTMLcomponent key={index} parentNode={parentNode} divOpacity={divOpacity} visible={visible[index]}>
                  {val}
                </HTMLcomponent>,
                parts.current[index * 2],
                parts.current[index * 2 + 1],
                items.current.Bread,
              ]
            } else {
              // if you have more than one, add bread/stuffing for start and end
              return [
                ...(index === 0 ? [items.current.Bread, parts.current[index * 2 + 2], parts.current[index * 2 + 3]] : []),
                <HTMLcomponent key={index} parentNode={parentNode} divOpacity={divOpacity} visible={visible[index]}>
                  {val}
                </HTMLcomponent>,
                parts.current[index * 2],
                parts.current[index * 2 + 1],
                ...(index ===  numOfChildren - 1 ? [items.current.Bread] : []),
              ]
            }
          }).flatMap((el) => el).map((el, i) => <group receiveShadow castShadow key={i}>{el}</group>)}
        </SandwichAnimController>
      </PresentationControls>
      <PerspectiveCamera makeDefault ref={cam} fov={40} position={[0,70,0]} rotation={[-Math.PI/2, 0,0]}/>
    </group>
  )
}
Sandwich.propTypes = {
  children: PropTypes.node.isRequired,
}
