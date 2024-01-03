import { Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import Masonry from '@mui/lab/Masonry'

export default function Frontpage () {
  return (
    <Box name="BOX!" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', paddingTop: '50px' }}>
      <Masonry columns={2} spacing={2} sx={{ maxWidth: '1200px' }}>
        <Paper sx={{ height: '100px', width: '100px' }}>
          <p>1</p>
        </Paper>
        <Paper sx={{ height: '220px', width: '100px' }}>
          <p>2</p>
        </Paper>
        <Paper sx={{ height: '100px', width: '100px' }}>
          <p>3</p>
        </Paper>
      </Masonry>
    </Box>
  )
}
