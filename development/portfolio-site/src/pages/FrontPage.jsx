import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Sandwich from '../components/Sandwich'
import { Suspense, useEffect, useState } from 'react'
import Profile from '../components/Profile'
import Test from '../components/Test'
import ProjectCard from '../components/ProjectCard'
import projectData from '../../projects.json'
import Conclusion from '../components/Conclusion'

export const palette = {
  complementary: '#ff9248',
  list: ['#DCF2F1', '#7FC7D9', '#365486', '#0F1035'],
}

export default function ThreeFrontPage () {
  const createOnClickFunc = (external, URL) => {
    if (external) {
      return () => { window.open(URL, '_blank') }
    } else {
      return () => { navigate(URL) }
    }
  }
  const [sandwichParts, setSandwichParts] = useState(null)
  useEffect(() => {
    setSandwichParts(
      [
        <Profile key={-1}/>, 
        ...(
          [...projectData].reverse().map((val, i) => <ProjectCard key={i }
            title={val.title} 
            body={val.body} 
            imageSrc={val.image.imageURL.includes('https://') ? val.image.imageURL : `/projectImgs/${val.image.imageURL}`}
            imageStyle={val.image.objectFit}
            onClickView={val.view ? createOnClickFunc(val.view.external, val.view.url) : undefined}
            onClickSource={val.code ? createOnClickFunc(val.code.external, val.code.url) : undefined}
          />)
        ),
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        // <Test/>,
        <Conclusion key={-2}/>
      ]
    )
  }, [])

  return (
    <div style={{ height: '100vh', background: '#2d4967' }}>
      { sandwichParts &&
        <Suspense fallback={null}>
        <Canvas dpr={[1,2]} shadows gl={{antialias: true}} camera={{position: [70,70,70]}}>
          <ScrollControls pages={2} damping={0.1}>
            <Scroll style={{ width: '100%' }}>
              <Sandwich>
                {...sandwichParts}
              </Sandwich>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense> 
      }
    </div>
  )
}
