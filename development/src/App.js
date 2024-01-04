/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import Navbar from './pages/Navbar'
import Frontpage from './pages/Frontpage'
import Construction from './pages/Construction'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200EE',
      secondary: '#bb86fc'
    }
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
          <Route path="/" element={<Navbar/>}>
            <Route path="home" element={<Frontpage/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
