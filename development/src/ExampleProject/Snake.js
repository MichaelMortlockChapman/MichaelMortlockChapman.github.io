/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { Stack } from '@mui/material'

export default function Snake () {
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
  const createGrid = (gridArr) => {
    return (
      <table><tbody>
        {gridArr.map((row, i) => <tr key={i}>
          {row.map((val, i) => <td key={i} style={{ 
            border: '1px solid', 
            backgroundColor: val === 1 ? 'green' : 'white', 
            padding: '0',
            width: '1rem',
            height: '1rem',
            textAlign: 'center'
          }}>
            {val}
          </td>)}
        </tr>)}
      </tbody></table>
    )
  }

  const [grid, setGrid] = useState(<></>)

  const getTail = (snake) => snake[snake.length]
  const gridArr = useRef(createGridArr(width, height))
  const snake = useRef([{ now: [9, 9], next: [-1, -1] }])
  const direction = useRef(([0, 1])) 

  const update = () => {
    console.log('update')
    const _gridArr = JSON.parse(JSON.stringify(gridArr.current))
    const _snake = JSON.parse(JSON.stringify(snake.current))
    for (let i = 0; i < _snake.length; i++) {
      const [x, y] = _snake[i].now
      _gridArr[x][y] = 0
    }
    for (let i = 1; i < _snake.length; i++) {
      const [x, y] = _snake[i].next
      _gridArr[x][y] = 1
      _snake[i].now = _snake[i].next
    }
    const [x, y] = _snake[0].now
    const [dx, dy] = direction.current
    const newX = (x + dx) % width
    const newY = (y + dy) % height
    _snake[0].now = [newX, newY]
    _gridArr[newX][newY] = 1
    
    snake.current = _snake
    gridArr.current = _gridArr
    setGrid(createGrid(_gridArr))
  }

  useEffect(() => {
    gridArr.current[9][9] = 1
    setGrid(createGrid(gridArr.current))
    const timerID = setInterval(update, 1000)
    return () => {
      console.log(`cleared ${timerID}`)
      clearInterval(timerID)
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

  return (
    <Stack direction='row' justifyContent='center' alignContent='center'>  
      <div>
        {grid}
        <input type='text' id='one' onKeyDown={handleKeyPress}/>
        <br/>{`${direction.current[0]}:${direction.current[1]}`}
        <br/>{`${snake.current[0].now[1]}:${snake.current[0].now[1]}`}
      </div>
    </Stack>
  )
}
