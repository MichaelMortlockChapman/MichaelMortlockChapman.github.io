import { ThemeProvider } from '@emotion/react'
import { Typography, createTheme } from '@mui/material'
import Snake from './Components/Snake.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7FC7D9',
      secondary: '#365486',
      complementary: '#ff9248'
    },
    list: ['#DCF2F1', '#7FC7D9', '#365486', '#0F1035']
  },
  style: {
    itemPadding: '5px'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginTop: '15px' }}>
        <Snake/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <a href="https://github.com/MichaelMortlockChapman/MichaelMortlockChapman.github.io/tree/main/development/src/ExampleProject" rel="noreferrer" target="_blank">
              <Typography variant='body1'>Source code</Typography>
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
