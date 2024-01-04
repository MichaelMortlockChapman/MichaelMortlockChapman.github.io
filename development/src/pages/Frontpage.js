import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry'
import { useTheme } from '@emotion/react'

const progLang = ['C', 'C++', 'C#', 'Java', 'JavaScript', 'ReactJS', 'HTML & CSS', 'Python']

export default function Frontpage () {
  const theme = useTheme()
  return (
    <Box name="BOX!" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', paddingTop: '50px' }}>
      <Masonry columns={2} spacing={2} sx={{ maxWidth: '1200px' }}>
        <Paper sx={{ height: 'fit-content', width: '100px' }}>
          <Typography sx={{ padding: theme.style.itemPadding, fontWeight: 'normal' }} variant='h5'>
            Hi, I&apos;m <span style={{ fontWeight: 'bold' }}>Michael</span>.
          </Typography>
          <Typography sx={{ padding: theme.style.itemPadding }} variant='body2'>
            I&apos;m a highly motivated recent graduate student of a Bachelor of Computer Science. 
            Majored in artificial intelligence with a minor of information systems. 
            Passionate about developing and maintaining excellent software and furthering 
            my skills and knowledge in the industry. Eagerly looking for a position to 
            demonstrate my skills and passion for this field.
          </Typography>
        </Paper>
        <Paper sx={{ height: 'fit-content', width: '100px' }}>
          <div style={{ padding: theme.style.itemPadding, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/logo512.png" alt='profile image' style={{
              height: '100px'
            }}/>
          </div>
        </Paper>
        <Paper sx={{ height: 'fit-content', width: '100px' }}>
          <div style={{ padding: theme.style.itemPadding }}>
            {progLang.map((v, i) => 
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
      </Masonry>
    </Box>
  )
}
