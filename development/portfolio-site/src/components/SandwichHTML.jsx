import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types';

export default function SandwichHTML({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 490 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const sizeTable = [
    ['700px', '620px'],
    ['800px', '560px'],
    ['450px', '325px'],
  ]

  return (
    <div style={{ 
      overflowY: 'auto',
      overflowX: 'auto',
      backgroundColor: 'white', 
      maxHeight:  !isPortrait && isDesktop ? sizeTable[0][0] : isPortrait && isDesktop ? sizeTable[1][0] : sizeTable[2][0], 
      width: !isPortrait && isDesktop ? sizeTable[0][1] : isPortrait && isDesktop ? sizeTable[1][1] : sizeTable[2][1], 
      padding: '10px', borderRadius: '40px' 
    }}>
      {children}
    </div>
  )
}
SandwichHTML.propTypes = {
  children: PropTypes.node.isRequired,
}
