import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Slash () {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  })
  return <></>
}
