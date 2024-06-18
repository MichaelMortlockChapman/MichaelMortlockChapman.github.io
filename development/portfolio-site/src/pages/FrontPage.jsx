import { Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Sandwich from '../components/Sandwich'
import { Suspense, useEffect, useState } from 'react'
import Profile from '../components/Profile'
import ProjectCard from '../components/ProjectCard'
import projectData from '../../projects.json'
import Conclusion from '../components/Conclusion'
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import zIndex from '@mui/material/styles/zIndex'

function ScrollMiddleware ({goToSegment, segmentNum, pagesNum, flag}) {
  const scroll = useScroll()
  useEffect(() => {
    scroll.el.scrollTo({ top: ((document.documentElement.clientHeight * pagesNum) / segmentNum) * (0.5 + goToSegment), left: 0, behavior: 'smooth' })
  }, [flag])
  return (null)
}
ScrollMiddleware.propTypes = {
  goToSegment: PropTypes.number.isRequired,
  segmentNum: PropTypes.number.isRequired,
  pagesNum: PropTypes.number.isRequired,
  flag: PropTypes.bool.isRequired,
}

export default function ThreeFrontPage () {
  // no longer care if external are not as react/route is not currently in use
  const createOnClickFunc = (_, URL) => {
    return () => window.open(URL, '_blank')
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
        <Conclusion key={-2}/>
      ]
    )
  }, [])
  const scrollPagesNum = sandwichParts !== null ? Math.floor(sandwichParts.length / 2) : 2

  // need to use a middle-man to tell scroll controls to scroll to certain position
  //  using state passed to 'ScrollMiddleware' to do this
  const [contactScrollFlag, setContactScrollFlag] = useState(false)
  const goToContact = () => {
    setContactScrollFlag(!contactScrollFlag)
  }
  const [firstProjectScrollFlag, setFirstProjectScrollFlag] = useState(false)
  const [projectFocus, setProjectFocus] = useState(0)
  const goToFirstProject = () => {
    setProjectFocus(projectFocus == sandwichParts.length - 2 ? 1 : projectFocus + 1)
    setFirstProjectScrollFlag(!firstProjectScrollFlag)
  }
  const [endScrollFlag, setEndScrollFlag] = useState(false)
  const goToEnd = () => {
    setEndScrollFlag(!endScrollFlag)
  }

  const [dialogOpen, setDialogOpen] = useState(true)

  return (
    <div style={{ height: '100vh', background: '#2d4967' }}>
      <Dialog open={dialogOpen}>
        <DialogTitle sx={{ textAlign: 'center'}}><b>Welcome To My Portfolio Site!</b></DialogTitle>
        <DialogContent sx={{ paddingBottom: '0' }}>
          <Typography variant='body1'><b>SCROLL</b> - Page Navigation</Typography>
          <Typography variant='body1'><b>HOLD CLICK & DRAG*</b> - 3D Movement</Typography>
          <Typography variant='body1'><b>ESC*</b> - Skip Intro</Typography>
          <Typography sx={{ fontSize: '0.7rem'}}>*PC Only Currently</Typography>
          <br/>
          <Typography variant='body1'>This site works best at default zoom settings (100%). Additionally for site navigation, make sure you&apos;re not scrolling on info elements as they have their own scrollbars!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Start</Button>
        </DialogActions>
      </Dialog>
      { !dialogOpen && sandwichParts &&
        <Suspense fallback={null}>
          <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none', padding: '5px' }}>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: '25px' }}>
              <Button variant="text" sx={{ width: 'min-content', padding: '5px' }} color="inherit" onClick={goToContact}><u>Contact</u></Button>
              <Button variant="text" sx={{ width: 'min-content', padding: '5px' }} color="inherit" onClick={goToFirstProject}><u>Projects</u></Button>
              <Button variant="text" sx={{ width: 'fit-content', padding: '5px' }} color="inherit" onClick={goToEnd}><u>Source Code</u></Button>
            </Stack>
          </AppBar>
          <Canvas dpr={[1,2]} shadows gl={{antialias: true}} camera={{position: [70,70,70]}}>
            <ScrollControls pages={scrollPagesNum} damping={0.05} maxSpeed={300}>
              <ScrollMiddleware segmentNum={sandwichParts.length} pagesNum={scrollPagesNum} goToSegment={0} flag={contactScrollFlag}/>
              <ScrollMiddleware segmentNum={sandwichParts.length} pagesNum={scrollPagesNum} goToSegment={projectFocus} flag={firstProjectScrollFlag}/>
              <ScrollMiddleware segmentNum={sandwichParts.length} pagesNum={scrollPagesNum} goToSegment={sandwichParts.length - 1} flag={endScrollFlag}/>
              <Scroll style={{ width: '100%' }}>
                <Sandwich>
                  {sandwichParts.map(el => el)}
                </Sandwich>
              </Scroll>
            </ScrollControls>
          </Canvas>
        </Suspense> 
      }
    </div>
  )
}
