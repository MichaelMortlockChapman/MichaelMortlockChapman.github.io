/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import Navbar from './pages/Navbar'
import Frontpage from './pages/Frontpage'
import Construction from './pages/Construction'
import Slash from './pages/Slash'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7FC7D9',
      secondary: '#365486'
    },
    list: ['#DCF2F1', '#7FC7D9', '#365486', '#0F1035']
  },
  style: {
    itemPadding: '5px'
  }
})

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='' element={<Slash/>}/>
          <Route element={<Navbar/>}>
            <Route path="about" element={<Frontpage/>}/>
            {/* <Route path="contact" element={<Construction/>}/> */}
            <Route path="projects" element={<Construction/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
