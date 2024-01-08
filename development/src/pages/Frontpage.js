import { Box, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'
import Waves from '../components/waves/Waves'

const progLang = ['C', 'C++', 'C#', 'Java', 'JavaScript', 'ReactJS', 'HTML & CSS', 'Python']
const tech = ['SQL', 'Git', 'Unity', 'UE5']

function listView (theme, list) {
  return (
    <Paper sx={{ height: 'fit-content', width: 'fit-content' }}>
      <div style={{ padding: theme.style.itemPadding }}>
        {list.map((v, i) => 
          <div key={v}
            style={{ 
              display: 'inline-block',
              backgroundColor: theme.palette.list[i % 4], 
              color: i % 4 === 0 ? 'black' : 'white',
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
    </Paper>
  )
}

function ProfilePicItem ({ theme }) {
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
ProfilePicItem.propTypes = {
  theme: PropTypes.object.isRequired
}

export default function Frontpage () {
  const theme = useTheme()
  const isMobile = useMediaQuery({ maxWidth: '600px' })
  const changeFooterStyle = useMediaQuery({ maxWidth: '700px' })

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '15px', marginBottom: changeFooterStyle ? '70px' : '0' }}>
        <Box sx={{ maxWidth: '1000px' }}>
          <Stack spacing={2} direction={'row'}>
            <Stack spacing={2}>
              {isMobile && <ProfilePicItem theme={theme}/> }
              <Paper sx={{ height: 'fit-content' }}>
                <Typography sx={{ padding: theme.style.itemPadding, fontWeight: 'normal' }} variant='h4'>
                  Hi, I&apos;m <span style={{ fontWeight: 'bold' }}>Michael</span>.
                </Typography>
                <Typography sx={{ padding: theme.style.itemPadding }} variant='body1'>
                  I am a highly motivated recent Bachelor of Computer Science graduate. 
                  My major is in artificial intelligence with a minor in information systems. 
                  My passion is to develop and maintain excellent software and to further my skills 
                  and knowledge in the industry. I am hard working, collegiate and eager to find a 
                  position where I can demonstrate my ability and passion for this field.
                </Typography>
              </Paper>
              <Box>
                {listView(theme, progLang)}
              </Box>
              <Box>
                {listView(theme, tech)}
              </Box>
              <Paper sx={{ height: 'fit-content', width: 'fit-content', paddingRight: '10px' }}>
                <Typography sx={{ padding: theme.style.itemPadding, fontWeight: 'bold' }} variant='body1'>
                  Contact me at:
                </Typography>
                <Typography sx={{ padding: theme.style.itemPadding }} variant='body1'>
                  <a href="mailto: mmortlockchapman@gmail.com" rel="noreferrer" target="_blank">mmortlockchapman@gmail.com</a><br/>
                  <a href="https://www.linkedin.com/in/m-mortlock-chapman/" rel="noreferrer" target="_blank">www.linkedin.com/in/m-mortlock-chapman/</a>
                </Typography>
              </Paper>
            </Stack>
            {!isMobile && 
              <Stack spacing={2} sx={{ width: 'fit-content' }}>
                <ProfilePicItem theme={theme}/>
              </Stack>
            }
          </Stack>
        </Box>
      </Box>
      <div style={{ position: changeFooterStyle ? '' : 'absolute', bottom: 0, width: '100%', zIndex: -1 }}>
        <div >
          <Waves style={{ height: '150px', width: '100%', position: 'relative', top: '4px' }}/>
        </div>
      </div>
    </>
  )
}
