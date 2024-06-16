import { Box, IconButton, Stack, Typography } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

function ProfilePicItem () {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '15px' }}>
      <img src="/me.png" alt='profile image' style={{
        height: '200px'
      }}/>
    </div>
  )
}

const palette = {
  complementary: '#ff9248',
  list: ['#DCF2F1', '#7FC7D9', '#365486', '#0F1035'],
}
function ListView ({ list }) {
  return (
    <div style={{ padding: '5px' }}>
      {list.map((v, i) => 
        <div key={v}
          style={{ 
            display: 'inline-block',
            backgroundColor: palette.list[i % palette.list.length], 
            color: i % palette.list.length === 0 ? 'black' : 'white',
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
  )
}

const progLang = ['C', 'C++', 'C#', 'Java', 'JavaScript', 'ReactJS', 'HTML & CSS', 'Python']
const tech = ['SQL / PostgreSQL', 'Git', 'Unity', 'UE5']
export default function Profile() {
  const isMobile = useMediaQuery({ maxWidth: '600px' })

  return (
    <div style={{ backgroundColor: 'white', width: '520px', padding: '20px', borderRadius: '50px' }}>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '15px'}}>
        <ProfilePicItem/>
        <Box>
          <Typography sx={{ fontWeight: 'normal' }} variant='h4'>
            Hi, I&apos;m <span style={{ fontWeight: 'bold', color: palette.complementary }}>Michael</span>.
          </Typography>
          <Typography variant='body1'>
            I am a highly motivated recent graduate of computer science.
            My major is in artificial intelligence with a minor in information systems. 
            My passion is to develop and maintain excellent software and to further my skills 
            and knowledge in the industry. I am hard working, collegiate and eager to find a 
            position where I can demonstrate my ability and passion for this field.
          </Typography>
          <Stack spacing={2} sx={{ paddingTop: '10px' }}>
            <ListView list={progLang}/>
            <ListView list={tech}/>
            <Box>
              <Typography sx={{ fontWeight: 'bold' }} variant='body1'>
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
                <a href="mailto:mmortlockchapman@gmail.com" rel="noreferrer" target="_blank">
                  <img src='/email.svg' width={'30px'} alt='email icon'/>
                </a>
              </IconButton>
            </Box>
            </Stack>
        </Box>
      </Box>
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', margin: '15px', marginBottom: changeFooterStyle ? '70px' : '0' }}>
        <Box sx={{ maxWidth: '1000px' }}>
          <Stack spacing={2} direction={'column'} alignItems={isMobile ? 'center' : 'none' }>
            {isMobile && <ProfilePicItem theme={theme}/> }
            <Paper sx={{ height: 'fit-content', ...borderStyle }}>
              <Typography sx={{ padding: theme.style.itemPadding, fontWeight: 'normal' }} variant='h4'>
                Hi, I&apos;m <span style={{ fontWeight: 'bold', color: theme.palette.primary.complementary }}>Michael</span>.
              </Typography>
              <Typography sx={{ padding: theme.style.itemPadding }} variant='body1'>
              I am a highly motivated recent graduate of computer science.
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
                      <a href="mailto:mmortlockchapman@gmail.com" rel="noreferrer" target="_blank">
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
      </Box> */}
    </div>
  )
}