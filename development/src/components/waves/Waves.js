// css/animation help from https://codepen.io/tanema/pen/GRZgYJY
import { useTheme } from '@emotion/react'
import './Waves.css'

export default function Waves (props) {
  const theme = useTheme()

  return (
    <svg viewBox="0 0 1320 500" preserveAspectRatio="none" {...props}>
      <path style={{ fill: theme.palette.list[0], fillOpacity: '0.5' }}/>
      {/* <path style={{ fill: '#fff', fillOpacity: '0.5' }}/> */}
      <path style={{ fill: theme.palette.list[1], fillOpacity: '0.5' }}/>
      <path style={{ fill: theme.palette.list[2], fillOpacity: '0.5' }}/>
    </svg>
  )
}
