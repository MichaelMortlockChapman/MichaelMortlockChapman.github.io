// css/animation help from https://codepen.io/tanema/pen/GRZgYJY
import './Waves.css'

export default function Waves (props) {
  return (
    <svg viewBox="0 0 1320 500" preserveAspectRatio="none" {...props}>
      <path style={{ fill: '#000', fillOpacity: '0.5' }}/>
      {/* <path style={{ fill: '#fff', fillOpacity: '0.5' }}/> */}
      <path style={{ fill: '#ee5253', fillOpacity: '0.5' }}/>
      <path style={{ fill: '#00d2d3', fillOpacity: '0.5' }}/>
    </svg>
  )
}
