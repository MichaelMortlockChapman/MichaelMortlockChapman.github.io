/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { Button, FormControlLabel, Stack, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import GameBoi from './GameBoi'
import { useTheme } from '@emotion/react'

export default function Snake () {
  const theme = useTheme()

  const width = 20
  const height = 20

  const createGridArr = (width, height) => {
    const gridArr = []
    for (let i = 0; i < height; i++) {
      const arr = []
      for (let j = 0; j < width; j++) {
        arr[j] = 0
      }
      gridArr[i] = arr
    }
    return gridArr
  }

  const findColour = (val) => {
    switch (val) {
    case 0:
      return '#ffffff00'
    case 1:
      return 'green'
    case 2:
      return 'Red'
    default:
      return '#ffffff00'
    }
  }

  const createGrid = (gridArr) => {
    return (
      <table><tbody>
        {gridArr.map((row, i) => <tr key={i}>
          {row.map((val, i) => <td key={i} style={{ 
            border: '1px solid', 
            backgroundColor: findColour(val), 
            padding: '0',
            width: '1rem',
            height: '1rem',
            textAlign: 'center'
          }}>
            {' '}
          </td>)}
        </tr>)}
      </tbody></table>
    )
  }

  const [grid, setGrid] = useState(<></>)

  const gridArr = useRef(createGridArr(width, height))
  const snake = useRef([])
  const direction = useRef(([0, 1])) 
 
  const placeNewApple = (gridArr) => {
    const randomInt = (max) => Math.floor(Math.random() * max)
    let aRandomTile = [randomInt(width), randomInt(height)]
    while (gridArr[aRandomTile[0]][aRandomTile[1]] !== 0) {
      aRandomTile = [randomInt(width), randomInt(height)]
    }
    gridArr[aRandomTile[0]][aRandomTile[1]] = 2
  }

  const titleCheck = (gridArr, snake, newTile) => {
    switch (newTile) {
    case 2:
      // eslint-disable-next-line no-case-declarations
      const newTail = snake[snake.length - 1].last
      console.log(newTail)
      snake.push({ now: newTail, last: newTail })
      // eslint-disable-next-line no-case-declarations
      const [x, y] = newTail
      gridArr[x][y] = 1
      placeNewApple(gridArr)
      break
    case 1:
      console.log('game over')
      handleGameOver()
      break
    default:
      break
    }
  }

  const [pausedState, setPausedState] = useState(false)
  const paused = useRef(false)
  const update = () => {
    console.log('update')
    if (paused.current) {
      return
    }
    const _gridArr = JSON.parse(JSON.stringify(gridArr.current))
    const _snake = JSON.parse(JSON.stringify(snake.current))
    for (let i = 0; i < _snake.length; i++) {
      const [x, y] = _snake[i].now
      _gridArr[x][y] = 0
      _snake[i].last = _snake[i].now
    }
    for (let i = 1; i < _snake.length; i++) {
      const [x, y] = _snake[i - 1].last
      _gridArr[x][y] = 1
      _snake[i].now = _snake[i - 1].last
    }
    const [x, y] = _snake[0].now
    const [dx, dy] = direction.current
    let newX = (x + dx) % width
    let newY = (y + dy) % height
    newX = newX < 0 ? (width - 1) : newX
    newY = newY < 0 ? (height - 1) : newY
    _snake[0].now = [newX, newY]
    titleCheck(_gridArr, _snake, _gridArr[newX][newY])
    _gridArr[newX][newY] = 1
    
    snake.current = _snake
    gridArr.current = _gridArr
    setGrid(createGrid(_gridArr))
  }

  const [started, setStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const timerID = useRef(-1)

  const handleStartGame = () => {
    setGameOver(false)
    gridArr.current = createGridArr(width, height)
    direction.current = [0, 1] 
    snake.current = [{ now: [9, 7], last: [9, 6] }]
    gridArr.current[9][7] = 1
    gridArr.current[9][9] = 2
    setGrid(createGrid(gridArr.current))
    timerID.current = setInterval(update, 1000)
    setStarted(true)
  }
  const handleGameOver = () => {
    clearInterval(timerID.current)
    setStarted(false)
    setGameOver(true)
  }

  useEffect(() => {
    setGrid(createGrid(gridArr.current))
    return () => {
      console.log(`cleared ${timerID.current}`)
      clearInterval(timerID.current)
    }
  }, [])

  const handleKeyPress = (e) => {
    let newDir = direction.current
    if (e.key === 'ArrowRight') {
      newDir = [0, 1]
    } else if (e.key === 'ArrowLeft') {
      newDir = [0, -1]
    } else if (e.key === 'ArrowUp') {
      newDir = [-1, 0]
    } else if (e.key === 'ArrowDown') {
      newDir = [1, 0]
    }
    direction.current = newDir
  }

  const menuStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'lightgrey',
    border: '1px solid black',
    color: 'black'
  }

  return (
    <>
      <GameBoi
        handleUpButton={() => { direction.current = [-1, 0] }}
        handleDownButton={() => { direction.current = [1, 0] }}
        handleRightButton={() => { direction.current = [0, 1] }}
        handleLeftButton={() => { direction.current = [0, -1] }}
        handleMenuButton={() => { 
          if (!gameOver && started) {
            setPausedState(!pausedState)
            paused.current = !paused.current
          }
        }}
      >
        {grid}
        {(!started && !gameOver) && (
          <Stack sx={ menuStyle } alignItems='center'>
            
            <Button onClick={handleStartGame} sx={{ color: 'black' }}>Start</Button>
          </Stack>
        )}
        {gameOver && (
          <Stack sx={ menuStyle } direction='column' alignItems='center' >
            <Typography>Game Over!</Typography>
            <Button onClick={handleStartGame} sx={{ color: 'black' }}>Play Again</Button>
            <Button sx={{ color: 'black' }}>Exit to Menu</Button>
          </Stack>
        )}
        {pausedState && (
          <div style={ menuStyle }>
            <Typography>Paused</Typography>
          </div>
        )}
      </GameBoi>
      {/* <FormControlLabel control={<Checkbox defaultChecked color='error' />} label='on'/>
      <FormControlLabel control={<Checkbox color='error' />} label='off'/> */}
    </>
  )
}
