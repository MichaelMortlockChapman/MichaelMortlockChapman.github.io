import { Outlet, useNavigate } from 'react-router-dom'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const navItems = [['About', '/about'], /* ['Contact', '/contact'], */ ['Projects', '/projects']]

export default function Navbar () {
  const navigate = useNavigate()
  return (
    <>
      <Box style={{ flexGrow: 1, height: 'fit-content' }}>
        <AppBar position='static'>
          <Toolbar component="nav" sx={{ justifyContent: 'end', overflowX: 'auto' }}>
            {navItems.map((pageObj) =>
              <Button variant="text" key={pageObj[0]} onClick={() => navigate(pageObj[1])}>
                <Typography color="white">
                  {pageObj[0]}
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
