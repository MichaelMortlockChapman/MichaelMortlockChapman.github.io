import { useEffect } from 'react'

/* eslint-disable no-unused-vars */
export default function ExampleProject () {
  const createColour = (r, g, b, a) => `rgba(${r},${g},${b},${a / 255})`
  const drawPixel = (ctx, x, y, colour) => {
    ctx.fillStyle = colour
    ctx.fillRect(x, y, 1, 1)
  }
  const width = 100
  const height = 100
  const black = createColour(0, 0, 0, 255)

  useEffect(() => {
    const canvasVar = document.getElementById('canvas')
    const ctx = canvasVar.getContext('2d')

    for (let index = 0; index < height; index++) {
      drawPixel(ctx, index, 49, black)
    }
  }, [])
  
  return (
    <>
      <canvas id="canvas" height={height} width={width}/>
    </>
  )
}
