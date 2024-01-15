import { Box, IconButton, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'
import Waves from '../components/waves/Waves'
import Cloud from '../components/clouds/Cloud'
import { randInt } from '../util'

const progLang = ['C', 'C++', 'C#', 'Java', 'JavaScript', 'ReactJS', 'HTML & CSS', 'Python']
const tech = ['SQL', 'Git', 'Unity', 'UE5']

function ListView ({ list, style }) {
  const theme = useTheme()

  return (
    // <Paper sx={{ height: 'fit-content', width: '100%', ...style }}>
    <div style={{ padding: theme.style.itemPadding }}>
      {list.map((v, i) => 
        <div key={v}
          style={{ 
            display: 'inline-block',
            backgroundColor: theme.palette.list[i % theme.palette.list.length], 
            color: i % theme.palette.list.length === 0 ? 'black' : 'white',
            margin: '2px 5px 0px 2px', 
            borderRadius: '5px', 
            padding: '5px' 
          }}
        >
          <Typography variant='body1'>
            {v}
          </Typography>
        </div>
      )}
    </div>
    // </Paper>
  )
}
ListView.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.object
}

function ProfilePicItem () {
  const theme = useTheme()

  return (
    <Box sx={{ width: 'fit-content' }}>
      <Paper sx={{ width: 'fit-content', height: 'fit-content', backgroundColor: theme.palette.primary.main, borderRadius: '100%' }}>
        <div style={{ padding: theme.style.itemPadding, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/me.png" alt='profile image' style={{
            height: '200px'
          }}/>
        </div>
      </Paper>
    </Box>
  )
}

export default function Frontpage () {
  const theme = useTheme()
  const isMobile = useMediaQuery({ maxWidth: '600px' })
  const changeFooterStyle = useMediaQuery({ maxWidth: '700px' })
  
  // const borderStyle = { border: `${theme.style.itemPadding} solid ${theme.palette.primary.main}` }
  const borderStyle = {}
  
  // CLOUD STUFF
  const smallSloudSize = useMediaQuery({ maxWidth: '1200px' })
  const smallCloudHeight = useMediaQuery({ maxWidth: '1000px' })
  const createCloudSize = (s = 0.02) => {
    let r = s
    if (smallSloudSize) {
      r *= 2
    }
    return `calc(100vw * ${r})`
  }
  const createCloudPositionHeight = (s = 0.2) => {
    let r = s
    r *= 2
    if (isMobile) {
      r += -0.2
      r *= 2
    } else if (smallCloudHeight) {
      r += 0.05
    }
    return `calc(100vh * ${r})`
  }
  const randCloudColor = () => {
    const randColors = [...theme.palette.list]
    return randColors[randInt(0, randColors.length - 1)]
  }
  
  return (
    <>
      {/* clouds */}
      <div style={{ position: 'relative', height: '150px' }}>
        <Cloud cloudHeight={createCloudSize(0.07)} cloudPositionHeight={createCloudPositionHeight(0.26)} fillColor={randCloudColor()} delay='-9s'/>
        <Cloud cloudHeight={createCloudSize(0.05)} cloudPositionHeight={createCloudPositionHeight(0.1)} fillColor={randCloudColor()} delay='-5s'/>
        <Cloud cloudHeight={createCloudSize(0.03)} cloudPositionHeight={createCloudPositionHeight(0.15)} fillColor={randCloudColor()} delay='-7s'/>
        <Cloud cloudHeight={createCloudSize(0.03)} cloudPositionHeight={createCloudPositionHeight()} fillColor={randCloudColor()} delay='-1s'/>
        <Cloud cloudHeight={createCloudSize(0.05)} cloudPositionHeight={createCloudPositionHeight()} fillColor={randCloudColor()} delay='-3s'/>
        <Cloud cloudHeight={createCloudSize(0.07)} cloudPositionHeight={createCloudPositionHeight(0.3)} fillColor={randCloudColor()} delay='-1.5s'/>
        <Cloud cloudHeight={createCloudSize(0.04)} cloudPositionHeight={createCloudPositionHeight(0.01)} fillColor={randCloudColor()} delay='-4s'/>
      </div>
      {/* info */}
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '15px', marginBottom: changeFooterStyle ? '70px' : '0' }}>
        <Box sx={{ maxWidth: '1000px' }}>
          <Stack spacing={2} direction={'column'} alignItems={isMobile ? 'center' : 'none' }>
            {isMobile && <ProfilePicItem theme={theme}/> }
            <Paper sx={{ height: 'fit-content', ...borderStyle }}>
              <Typography sx={{ padding: theme.style.itemPadding, fontWeight: 'normal' }} variant='h4'>
                Hi, I&apos;m <span style={{ fontWeight: 'bold', color: theme.palette.primary.complementary }}>Michael</span>.
              </Typography>
              <Typography sx={{ padding: theme.style.itemPadding }} variant='body1'>
                I am a highly motivated recent Bachelor of Computer Science graduate. 
                My major is in artificial intelligence with a minor in information systems. 
                My passion is to develop and maintain excellent software and to further my skills 
                and knowledge in the industry. I am hard working, collegiate and eager to find a 
                position where I can demonstrate my ability and passion for this field.
              </Typography>
            </Paper>
            <Stack spacing={2} direction={'row'} alignItems={'center'} >
              <Paper sx={{ height: 'fit-content', width: 'fit-content', ...borderStyle }}>
                <Stack spacing={2}>
                  <ListView list={progLang} style={borderStyle}/>
                  <ListView list={tech} style={borderStyle}/>
                  <Box>
                    <Typography sx={{ padding: theme.style.itemPadding, fontWeight: 'bold' }} variant='body1'>
                      Find me at:
                    </Typography>
                    <IconButton tabIndex={-1} aria-label='github link button'>
                      <a href="https://github.com/MichaelMortlockChapman" rel="noreferrer" target="_blank">
                        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width={'30px'} alt='github icon'/>
                      </a>
                    </IconButton>
                    <IconButton tabIndex={-1} aria-label='linkedIn link button'>
                      <a href="https://www.linkedin.com/in/m-mortlock-chapman/" rel="noreferrer" target="_blank">
                        <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" width={'30px'} alt='linkedIn Icon'/>
                      </a>
                    </IconButton>
                    <IconButton tabIndex={-1} aria-label='email link button'>
                      <a href="mailto: mmortlockchapman@gmail.com" rel="noreferrer" target="_blank">
                        <img src='/email.svg' width={'30px'} alt='email icon'/>
                      </a>
                    </IconButton>
                    <Typography sx={{ padding: theme.style.itemPadding }} variant='body1'>
                      <br/>
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
              {!isMobile && <Box sx={{ flexGrow: 1 }} >
                <Stack direction={'row'} justifyContent={'center'}>
                  <ProfilePicItem theme={theme}/>
                </Stack>
              </Box> }
            </Stack>
          </Stack>
        </Box>
      </Box>
      {/* waves */}
      <div style={{ position: changeFooterStyle ? '' : 'absolute', bottom: 0, width: '100%', zIndex: -1 }}>
        <div >
          <Waves style={{ height: '150px', width: '100%', position: 'relative', top: '4px' }}/>
        </div>
      </div>
    </>
  )
}
