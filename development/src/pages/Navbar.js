import { Outlet } from 'react-router-dom'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
// import HomeIcon from '../components/HomeIcon'

const navItems = ['About', 'Contact', 'Projects']

export default function Navbar () {
  return (
    <>
      <Box style={{ flexGrow: 1, height: 'fit-content' }}>
        <AppBar position='static'>
          <Toolbar component="nav" sx={{ justifyContent: 'end', overflowX: 'auto' }}>
            {navItems.map((str) =>
              <Button variant="text" key={str}>
                <Typography color="white">
                  {str}
                </Typography>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet/>
    </>
  )
}
