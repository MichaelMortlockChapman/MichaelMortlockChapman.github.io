import { Box, IconButton, Stack, Typography } from '@mui/material'
import SandwichHTML from './SandwichHTML'
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'
import { palette } from '../pages/Consts'

function ProfilePicItem () {
  const isDesktop = useMediaQuery({ minWidth: 490 })

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px' }}>
      <img src="/me.png" alt='profile image' style={{
        height: isDesktop ? '200px' : '100px'
      }}/>
    </div>
  )
}

function ListView ({ list }) {
  const isDesktop = useMediaQuery({ minWidth: 490 })

  return (
    <div style={{ paddingTop: '5px' }}>
      {list.map((v, i) => 
        <div key={v}
          style={{ 
            display: 'inline-block',
            backgroundColor: palette.list[i % palette.list.length], 
            color: i % palette.list.length === 0 ? 'black' : 'white',
            margin: isDesktop ? '2px 5px 0px 2px' : '1px 3px 0px 1px' , 
            borderRadius: '5px', 
            padding: isDesktop ? '5px' : '3px' , 
          }}
        >
          <Typography variant='body1' sx={{ fontSize: isDesktop ? '1rem' : '.6rem' }}>
            {v}
          </Typography>
        </div>
      )}
    </div>
  )
}
ListView.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
}

const progLang = ['C', 'C++', 'C#', 'Java', 'JavaScript', 'ReactJS', 'HTML & CSS', 'Python']
const tech = ['SQL / PostgreSQL', 'Git', 'Unity', 'UE5', 'R3F']
export default function Profile() {
  const isDesktop = useMediaQuery({ minWidth: 490 })

  return (
    <SandwichHTML>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '5px'}}>
        <ProfilePicItem/>
        <Box>
          <Typography variant='h4' sx={{ fontWeight: 'normal', fontSize: isDesktop ? '2.125rem' : '1.5rem' }}>
            Hi, I&apos;m <span style={{ fontWeight: 'bold', color: palette.complementary }}>Michael</span>.
          </Typography>
          <Typography variant='body1' sx={{ fontSize: isDesktop ? '1rem' : '.8rem' }}>
            I am a highly motivated recent graduate of computer science.
            My major is in artificial intelligence with a minor in information systems. 
            My passion is to develop and maintain excellent software and to further my skills 
            and knowledge in the industry. I am hard working, collegiate and eager to find a 
            position where I can demonstrate my ability and passion for this field.
          </Typography>
          <Stack>
            <ListView list={progLang}/>
            <ListView list={tech}/>
          </Stack>
          <Box>
            <Typography sx={{ fontWeight: 'bold', marginTop: '5px' }} variant='body1'>
              Find me at:
            </Typography>
            <IconButton tabIndex={-1} aria-label='github link button'>
              <a href="https://github.com/MichaelMortlockChapman" rel="noreferrer" target="_blank">
                <img src="/GitHub.png" width={'30px'} alt='github icon'/>
              </a>
            </IconButton>
            <IconButton tabIndex={-1} aria-label='linkedIn link button'>
              <a href="https://www.linkedin.com/in/m-mortlock-chapman/" rel="noreferrer" target="_blank">
                <img src="/LinkedIn.svg" width={'30px'} alt='linkedIn Icon'/>
              </a>
            </IconButton>
            <IconButton tabIndex={-1} aria-label='email link button'>
              <a href="mailto:mmortlockchapman@gmail.com" rel="noreferrer" target="_blank">
                <img src='/email.svg' width={'30px'} alt='email icon'/>
              </a>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </SandwichHTML>
  )
}