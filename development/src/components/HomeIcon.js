import PropTypes from 'prop-types'

export default function HomeIcon ({ size = '24px' }) {
  return (
    <svg width={size} height={size} id="screenshot-1abb9845-af45-8029-8003-2fd0b4107d2b" viewBox="0 0 24 24" fill="none" version="1.1">
      <g id="shape-1abb9845-af45-8029-8003-2fd0b4107d2b" width="48" height="48" rx="0" ry="0" style={{ fill: 'currentColor' }}>
        <g id="shape-1abb9845-af45-8029-8003-2fd0b4107d2d">
          <g className="fills" id="fills-1abb9845-af45-8029-8003-2fd0b4107d2d">
            <path rx="0" ry="0" d="M10.000,20.000L10.000,14.000L14.000,14.000L14.000,20.000L19.000,20.000L19.000,12.000L22.000,12.000L12.000,3.000L2.000,12.000L5.000,12.000L5.000,20.000Z"/>
          </g>
        </g>
        <g id="shape-1abb9845-af45-8029-8003-2fd0b4107d2e">
          <g className="fills" id="fills-1abb9845-af45-8029-8003-2fd0b4107d2e">
            <path fill="none" rx="0" ry="0" d="M0.000,0.000L24.000,0.000L24.000,24.000L0.000,24.000ZZ" style={{ fill: 'none' }}/>
          </g>
        </g>
      </g>
    </svg>
  )
}
HomeIcon.propTypes = {
  size: PropTypes.string
}
