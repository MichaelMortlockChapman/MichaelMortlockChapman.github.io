import PropTypes from 'prop-types'

export function LeftArrow ({ fillColor = 'black', height = '15px', width = '15px' }) {
  return (
    <svg viewBox="0 0.0 50 50" height={height} width={width} style={{ fill: fillColor, transformOrigin: '50% 50%', transform: 'rotate(-90deg)' }}>
      <path d="M 19.231 5.556 Q 25 -5.555 30.769 5.556 L 48.077 38.889 Q 53.846 50 42.308 50 L 7.692 50 Q -3.846 50 1.923 38.889 Z"/>
    </svg>
  )
}

export function RightArrow ({ fillColor = 'black', height = '15px', width = '15px' }) {
  return (
    <svg viewBox="0 0.0 50 50" height={height} width={width} style={{ fill: fillColor, transformOrigin: '50% 50%', transform: 'rotate(90deg)' }}>
      <path d="M 19.231 5.556 Q 25 -5.555 30.769 5.556 L 48.077 38.889 Q 53.846 50 42.308 50 L 7.692 50 Q -3.846 50 1.923 38.889 Z"/>
    </svg>
  )
}

export function UpArrow ({ fillColor = 'black', height = '15px', width = '15px' }) {
  return (
    <svg viewBox="0 0.0 50 50" height={height} width={width} style={{ fill: fillColor }}>
      <path d="M 19.231 5.556 Q 25 -5.555 30.769 5.556 L 48.077 38.889 Q 53.846 50 42.308 50 L 7.692 50 Q -3.846 50 1.923 38.889 Z"/>
    </svg>
  )
}

export function DownArrow ({ fillColor = 'black', height = '15px', width = '15px' }) {
  return (
    <svg viewBox="0 0.0 50 50" height={height} width={width} style={{ fill: fillColor, transformOrigin: '50% 50%', transform: 'rotate(180deg)' }}>
      <path d="M 19.231 5.556 Q 25 -5.555 30.769 5.556 L 48.077 38.889 Q 53.846 50 42.308 50 L 7.692 50 Q -3.846 50 1.923 38.889 Z"/>
    </svg>
  )
}

const ArrowPropTypes = {
  fillColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

LeftArrow.propTypes = ArrowPropTypes
RightArrow.propTypes = ArrowPropTypes
UpArrow.propTypes = ArrowPropTypes
DownArrow.propTypes = ArrowPropTypes
