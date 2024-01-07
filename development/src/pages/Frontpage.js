import { Box, Grid, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
// import Masonry from '@mui/lab/Masonry'
import { useTheme } from '@emotion/react'

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
              backgroundColor: theme.palette.primary.main, 
              color: 'white',
              margin: '5px 5px 0px 0px', 
              borderRadius: '5px', 
              padding: '5px' 
            }}
          >
            <Typography variant='body2'>
              {v}
            </Typography>
          </div>
        )}
      </div>
    </Paper>
  )
}

export default function Frontpage () {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ margin: '2px', maxWidth: '1000px', width: 'fit-content' }}>
        <Grid item xs={6}>
          <Stack spacing={2}>
            <Paper sx={{ height: 'fit-content' }}>
              <Typography sx={{ padding: theme.style.itemPadding, fontWeight: 'normal' }} variant='h5'>
                Hi, I&apos;m <span style={{ fontWeight: 'bold' }}>Michael</span>.
              </Typography>
              <Typography sx={{ padding: theme.style.itemPadding }} variant='body2'>
                I am a highly motivated recent Bachelor of Computer Science graduate. 
                My major is artificial intelligence with a minor in information systems. 
                My passion is to develop and maintain excellent software and further my 
                skills and knowledge in the industry. I am hard working, collegiate and 
                eager to find a position where I can demonstrate my ability and
                passion for this field.
              </Typography>
            </Paper>
            <Box>
              {listView(theme, progLang)}
            </Box>
            <Box>
              {listView(theme, tech)}
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ width: 'fit-content' }}>
          <Stack spacing={2} sx={{ width: 'fit-content' }}>
            <Box sx={{ width: 'fit-content' }}>
              <Paper sx={{ width: 'fit-content', height: 'fit-content' }}>
                <div style={{ padding: theme.style.itemPadding, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/me.jpg" alt='profile image' style={{
                    height: '200px'
                  }}/>
                </div>
              </Paper>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
