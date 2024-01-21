/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import Navbar from './pages/Navbar'
import Frontpage from './pages/Frontpage'
import Slash from './pages/Slash'
import Page404 from './pages/Page404'
import ProjectsPage from './pages/ProjectsPage'
import Snake from './ExampleProject/Snake'

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

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='*' element={<Page404/>}/>
          <Route path='' element={<Slash/>}/>
          <Route element={<Navbar/>}>
            <Route path="home" element={<Frontpage/>}/>
            <Route path="projects" element={<ProjectsPage/>}/>
            <Route path="snake" element={<Snake/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
