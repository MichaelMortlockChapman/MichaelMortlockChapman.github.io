import { Outlet, useNavigate } from 'react-router-dom'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'

const navItems = [['About', '/about'], ['Projects', '/projects']]

export default function Navbar () {
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <>
      <Box style={{ flexGrow: 1, height: 'fit-content' }}>
        <AppBar position='static' sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar component="nav" sx={{ justifyContent: 'end', overflowX: 'auto' }}>
            {navItems.map((pageObj) =>
              <Button variant="text" key={pageObj[0]} onClick={() => navigate(pageObj[1])}>
                <Typography color={theme.palette.primary.main} sx={{ textDecoration: 'underline' }}>
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
