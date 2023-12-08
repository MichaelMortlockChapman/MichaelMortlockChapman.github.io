import { Stack, Typography } from '@mui/material'

export default function Construction () {
  return (
    <>
      <Stack 
        sx={{ 
          width: '100vw', 
          height: '100vh',
          direction: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#bfc2c7',
          gap: '5px'
        }}
      >
        <div style={{ width: '100%', height: '10px', backgroundRepeat: 'repeat-x', backgroundImage: 'url(cautionTape.svg)' }}/>
        <div style={{ backgroundColor: 'white', width: '100%', padding: '20px' }}>
          <Typography fontWeight={'bold'}>Under Construction!</Typography>
        </div>
        <div style={{ width: '100%', height: '10px', objectFit: 'contain', backgroundRepeat: 'repeat-x', backgroundImage: 'url(cautionTape.svg)' }}/>
      </Stack>
    </>
  )
}
