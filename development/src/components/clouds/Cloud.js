import PropTypes from 'prop-types'
import './Cloud.css'

export default function Cloud ({ fillColor = 'black', cloudHeight = '150px', cloudPositionHeight, delay = '0s' }) {
  return (
    <div style={{ position: 'absolute', overflow: 'hidden', height: cloudHeight, width: '100%', top: cloudPositionHeight, zIndex: -1 }}>
      <svg id="cloud" viewBox="100 286.415 100 61.538" width={cloudHeight} height={cloudHeight} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{ position: 'absolute', animationDelay: delay }}>
        <path style={{ fill: fillColor }} d="M 189.731 313.797 C 189.295 298.622 176.815 286.415 161.538 286.415 C 150.731 286.415 141.049 292.481 136.3 302.048 C 135.318 301.881 134.328 301.799 133.333 301.799 C 126.359 301.799 120.062 305.858 117.123 312.074 C 107.608 312.507 100 320.384 100 330.004 C 100 339.902 108.054 347.953 117.949 347.953 L 182.051 347.953 C 191.946 347.953 200 339.902 200 330.004 C 200 323.035 195.944 316.74 189.731 313.797 Z M 182.051 342.825 L 117.949 342.825 C 110.879 342.825 105.128 337.074 105.128 330.004 C 105.128 322.935 110.879 317.184 117.949 317.184 C 118.108 317.184 118.262 317.197 118.418 317.207 L 120.608 317.34 L 121.246 315.512 C 123.046 310.379 127.905 306.927 133.333 306.927 C 134.582 306.927 135.828 307.112 137.031 307.476 L 139.272 308.15 L 140.149 305.981 C 143.697 297.209 152.09 291.543 161.538 291.543 C 174.264 291.543 184.615 301.897 184.615 314.62 L 184.508 317.294 L 186.285 317.917 C 191.421 319.717 194.872 324.576 194.872 330.004 C 194.872 337.074 189.121 342.825 182.051 342.825 Z"/>
      </svg>
    </div>
  )
}
Cloud.propTypes = {
  fillColor: PropTypes.string,
  cloudHeight: PropTypes.string,
  cloudPositionHeight: PropTypes.string,
  delay: PropTypes.string
}
