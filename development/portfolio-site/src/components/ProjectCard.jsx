import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import SandwichHTML from "./SandwichHTML"
import { palette } from "../pages/Consts"
import PropTypes from 'prop-types'

export default function ProjectCard (props) {
  const {
    onClickView, onClickSource,
    imageSrc, imageStyle,
    title, body
  } = props

  return (
    <SandwichHTML>
      <CardMedia sx={{ display: 'flex', justifyContent: 'center' }}>
        <img 
          src={imageSrc} 
          style={{
            imageRendering: '-o-crisp-edges', 
            objectFit: imageStyle || 'initial',
            width: '50%',
            height: '50%',
            borderRadius: '40px'
          }} 
          alt={`${title} picture`}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {body !== undefined && <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>}
      </CardContent>
      <CardActions>
        {onClickView !== undefined && <Button size="small" sx={{ color: palette.complementary }} color={'inherit'} onClick={onClickView} >View</Button>}
        {onClickSource !== undefined && <Button size="small" sx={{ color: palette.complementary }} color={'inherit'} onClick={onClickSource}>Source Code</Button>}
      </CardActions>
    </SandwichHTML>
  )
}
ProjectCard.propTypes = {
  onClickView: PropTypes.func,
  onClickSource: PropTypes.func,
  imageSrc: PropTypes.string.isRequired,
  imageStyle: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string
}