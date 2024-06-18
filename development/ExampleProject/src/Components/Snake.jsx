/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { Button, Slider, Stack, Typography } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import GameBoi from './GameBoi'
import { useTheme } from '@emotion/react'

// GAME TITLE TEXT AND ELEMENT
const snakeText = `
 __  _  _   _   _  _ ___\n
/ _|| \\| | / \\ | |//| __|\n
\\_ \\| \\\\ || o ||  ( | _|\n 
|__/|_|\\_||_n_||_|\\\\|___|\n  
`
const SnakeTitle = () => <div style={{ fontFamily: 'monospace', whiteSpace: 'pre', lineHeight: '0.5' }}>{snakeText}</div>

// GAME SPEEDS
const gameRate = 1000 / 60 // '60fps'
const baseGameSpeed = 500
const gameSpeeds = [
  {
    value: 1,
    speed: 2,
    label: 'x1/2'
  },
  {
    value: 2,
    speed: 1,
    label: 'x1'
  },
  {
    value: 3,
    speed: 1 / 3,
    label: 'x3'
  },
  {
    value: 4,
    speed: 1 / 10,
    label: 'x10'
  }
]

// REACT SNAKE GAME ELEMENT
export default function Snake () {
  const theme = useTheme()

  // GRID FUNCS FOR 2D ARR AND ELEMENT
  const width = 15
  const height = 15

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

  // GAME SCREEN
  const [grid, setGrid] = useState(<></>)
  // GAME VARS
  const gridArr = useRef(createGridArr(width, height))
  const snake = useRef([])
  const direction = useRef(([0, 1])) 
 
  // GAME LOGIC FUNCS
  const placeNewApple = (gridArr) => {
    const randomInt = (max) => Math.floor(Math.random() * max)
    let aRandomTile = [randomInt(width), randomInt(height)]
    while (gridArr[aRandomTile[0]][aRandomTile[1]] !== 0) {
      aRandomTile = [randomInt(width), randomInt(height)]
    }
    gridArr[aRandomTile[0]][aRandomTile[1]] = 2
  }

  const tileCheck = (gridArr, snake, newTile) => {
    switch (newTile) {
    case 2:
      // eslint-disable-next-line no-case-declarations
      const newTail = snake[snake.length - 1].last
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

  // GAME SETTINGS
  const [portals, setPortals] = useState('off')
  const handlePortalSelection = (e) => { setPortals(e.target.value) }

  const [speed, setSpeed] = useState(2)
  const handleSpeedChange = (e) => {
    setSpeed(e.target.value)
  }

  // GAME UPDATGE LOOP FUNC
  const [pausedState, setPausedState] = useState(false)
  const paused = useRef(false)
  const update = () => {
    // using 'clock' as self-calling timeout was buggy so running update at 100ms and doing 'frame' when needed
    if (timerClock.current++ < (gameSpeeds[speed - 1].speed * baseGameSpeed) / gameRate) {
      return
    }
    timerClock.current = 0
    if (!paused.current) {
      // normal game loop logic
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
      if (portals === 'off' && ((x + dx) >= width || (x + dx) < 0 || (y + dy) >= height || (y + dy) < 0)) {
        handleGameOver()
        return
      }
      let newX = (x + dx) % width
      let newY = (y + dy) % height
      newX = newX < 0 ? (width - 1) : newX
      newY = newY < 0 ? (height - 1) : newY
      _snake[0].now = [newX, newY]
      tileCheck(_gridArr, _snake, _gridArr[newX][newY])
      _gridArr[newX][newY] = 1
      
      snake.current = _snake
      gridArr.current = _gridArr
      setGrid(createGrid(_gridArr))
    }
  }

  // GAME MENU AND INPUT HANDLING
  const [started, setStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const timerID = useRef(-1)
  const timerClock = useRef(0)

  const handleStartGame = () => {
    clearInterval(timerID.current)
    timerID.current = -1
    setGameOver(false)
    gridArr.current = createGridArr(width, height)
    direction.current = [0, 1] 
    snake.current = [{ now: [9, 7], last: [9, 6] }]
    gridArr.current[9][7] = 1
    // gridArr.current[9][9] = 2
    placeNewApple(gridArr.current)
    setGrid(createGrid(gridArr.current))
    timerID.current = setInterval(update, gameRate)
    setStarted(true)
  }
  const handleGameOver = () => {
    clearInterval(timerID.current)
    setStarted(false)
    setGameOver(true)
  }
  const handleStartMainMenu = () => {
    clearInterval(timerID.current)
    timerID.current = -1
    gridArr.current = createGridArr(width, height)
    setGrid(createGrid(gridArr.current))
    setStarted(false)
    setGameOver(false)
  }

  useEffect(() => {
    setGrid(createGrid(gridArr.current))
    return () => {
      clearInterval(timerID.current)
    }
  }, [])

  const menuStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'lightgrey',
    border: '1px solid black',
    color: 'black',
    padding: '3px'
  }

  const menuButtonFontStyle = { color: theme.palette.primary.secondary, fontWeight: 'bolder' }

  const handleMenuButton = () => { 
    if (!gameOver && started) {
      setPausedState(!pausedState)
      paused.current = !paused.current
    }
  }

  const willMoveIntoSelf = (newDir) => {
    const h = direction.current[1] * newDir[1]
    const v = direction.current[0] * newDir[0]
    // ignore when snake is 1 tile long
    return (h === -1 || v === -1) && snake.current.length > 1
  }
  
  const handleChangeDir = (newDir) => {
    // ignore moves that move 'backwards' into self for game 'fairness'
    if (willMoveIntoSelf(newDir)) {
      return
    }
    direction.current = newDir
  }

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
    handleChangeDir(newDir)
  }

  return (
    <>
      <GameBoi
        handleUpButton={() => { handleChangeDir([-1, 0]) }}
        handleDownButton={() => { handleChangeDir([1, 0]) }}
        handleRightButton={() => { handleChangeDir([0, 1]) }}
        handleLeftButton={() => { handleChangeDir([0, -1]) }}
        handleMenuButton={handleMenuButton}
        handleStartButton={handleMenuButton}
      >
        {/* GAME / GRID VIEW */}
        {grid}
        {/* START SCREEN */}
        {(!started && !gameOver) && (
          <Stack sx={ menuStyle } alignItems='center'>
            <SnakeTitle/><br/>
            <FormControl sx={{ display: 'flex', alignItems: 'center', paddingLeft: '5px' }}>
              <FormLabel sx={{ color: `${theme.palette.primary.secondary} !important` }}>Portals</FormLabel>
              <RadioGroup
                row
                name="radio-buttons-group-portal-selection"
                value={portals}
                onChange={handlePortalSelection}
              >
                <FormControlLabel value="on" control={<Radio sx={{ color: `${theme.palette.primary.secondary} !important` }} />} label="On" />
                <FormControlLabel value="off" control={<Radio sx={{ color: `${theme.palette.primary.secondary} !important` }} />} label="Off" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: `${theme.palette.primary.secondary} !important` }}>Game Speed</FormLabel>
              <Slider 
                value={speed} 
                onChange={handleSpeedChange} 
                valueLabelDisplay="off"
                step={1} 
                min={1}
                max={gameSpeeds.length}
                marks={gameSpeeds} 
                sx={{ color: `${theme.palette.primary.secondary} !important` }} 
              />
            </FormControl>
            <Button onClick={handleStartGame} sx={menuButtonFontStyle}>Start</Button>
          </Stack>
        )}
        {/* GAME OVER SCREEN */}
        {gameOver && (
          <Stack sx={ menuStyle } direction='column' alignItems='center' >
            <Typography>Game Over!</Typography>
            <Button onClick={handleStartGame} sx={menuButtonFontStyle}>Play Again</Button>
            <Button onClick={handleStartMainMenu} sx={menuButtonFontStyle}>Exit to Menu</Button>
          </Stack>
        )}
        {/* PAUSE MENU */}
        {pausedState && (
          <Stack sx={ menuStyle } direction='column' alignItems='center' >
            <SnakeTitle/><br/>
            <Typography>Paused</Typography>
            <Button onClick={() => { handleMenuButton(); handleStartGame() }} sx={menuButtonFontStyle}>Restart</Button>
            <Button onClick={() => { handleMenuButton(); handleStartMainMenu() }} sx={menuButtonFontStyle}>Exit to Menu</Button>
          </Stack>
        )}
      </GameBoi>
    </>
  )
}
