import { Button, Card, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
// import Masonry from '@mui/lab/Masonry'
import PropTypes from 'prop-types'
import projectData from './projects.json'
import { useNavigate } from 'react-router-dom'
import Waves from '../components/waves/Waves'
import { useMediaQuery } from 'react-responsive'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

function ProjectCard (props) {
  const theme = useTheme()

  const {
    onClickView,
    onClickSource,
    imageSrc,
    imageStyle,
    title,
    body
  } = props

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      <CardMedia sx={{ display: 'flex', justifyContent: 'center' }}>
        <img 
          src={imageSrc} 
          style={{
            imageRendering: '-o-crisp-edges', 
            objectFit: imageStyle || 'initial',
            width: '100%',
            height: '100%'
          }} 
          alt={`${title} picture`}
        />
      </CardMedia>
      {/* <CardMedia
        sx={{ height: 140 }}
        image={imageSrc}
        title={imageSrc}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {body !== undefined && <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>}
      </CardContent>
      <CardActions>
        {onClickView !== undefined && <Button size="small" sx={{ color: theme.palette.primary.complementary }} color={'inherit'} onClick={onClickView} >View</Button>}
        {onClickSource !== undefined && <Button size="small" sx={{ color: theme.palette.primary.complementary }} color={'inherit'} onClick={onClickSource}>Source Code</Button>}
      </CardActions>
    </Card>
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

export default function ProjectsPage () {
  const navigate = useNavigate()

  const createOnClickFunc = (external, URL) => {
    if (external) {
      return () => { window.open(URL, '_blank') }
    } else {
      return () => { navigate(URL) }
    }
  }

  const changeFooterStyle = useMediaQuery({ maxWidth: '700px' })

  return (
    <>
      <Grid style={{ margin: '20px', justifyContent: 'center' }} container spacing={2}>
        {[...projectData].reverse().map((val, i) => <Grid key={i} xs="auto" ><ProjectCard
          title={val.title} 
          body={val.body} 
          imageSrc={val.image.imageURL.includes('https://') ? val.image.imageURL : `/projectImgs/${val.image.imageURL}`}
          imageStyle={val.image.objectFit}
          onClickView={val.view ? createOnClickFunc(val.view.external, val.view.url) : undefined}
          onClickSource={val.code ? createOnClickFunc(val.code.external, val.code.url) : undefined}
        /></Grid>)}
      </Grid>
      {/* waves */}
      <div style={{ position: changeFooterStyle ? '' : 'absolute', bottom: 0, width: '100%', zIndex: -1 }}>
        <Waves style={{ height: '150px', width: '100%', position: 'relative', top: '4px' }}/>
      </div>
    </>
  )
}
