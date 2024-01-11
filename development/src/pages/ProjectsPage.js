import { Link } from 'react-router-dom'

export default function ProjectsPage () {
  return (
    <div>
      <Link to={'/exampleProject'}>ExampleProject</Link>
      <Link to={'/snake'}>Snake Game</Link>
    </div>
  )
}
