/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function GameBoi (props) {
  const {
    handleUpButton,
    handleDownButton,
    handleLeftButton,
    handleRightButton,
    handleAButton,
    handleBButton,
    handleCButton,
    handleDButton,
    handleMenuButton,
    handleStartButton
  } = props

  const dpadEmptyStyle = {
    width: '40px', 
    height: '40px',
    display: 'inline-flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
  const dpadButtonStyle = { 
    backgroundColor: 'black', 
    ...dpadEmptyStyle
  }
  const dpadButton = (handleButton) => <IconButton onClick={handleButton}><div style={{
    backgroundColor: 'white',
    width: '0.8rem', 
    height: '0.8rem',
    borderRadius: '5px'
  }}/></IconButton>

  const dpad = (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td style={dpadEmptyStyle}></td>
          <td style={dpadButtonStyle}>{dpadButton(handleUpButton)}</td>
          <td style={dpadEmptyStyle}></td>
        </tr>
        <tr>
          <td style={dpadButtonStyle}>{dpadButton(handleLeftButton)}</td>
          <td style={dpadButtonStyle}></td>
          <td style={dpadButtonStyle}>{dpadButton(handleRightButton)}</td>
        </tr>
        <tr>
          <td style={dpadEmptyStyle}></td>
          <td style={dpadButtonStyle}>{dpadButton(handleDownButton)}</td>
          <td style={dpadEmptyStyle}></td>
        </tr>
      </tbody>
    </table> 
  )

  const rightButtonsStyle = {  
    ...dpadEmptyStyle
  }
  const RightButton = (textChar, handleButton) => (
    <IconButton onClick={handleButton}
      style={{
        backgroundColor: 'black',
        width: '1.8rem', 
        height: '1.8rem',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px',
        borderColor: 'grey',
        borderStyle: 'solid'
      }}
    ><Typography sx={{ fontWeight: 'bolder', color: 'grey' }}>{textChar}</Typography></IconButton>
  )

  const rightButtons = (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        <tr>
          <td style={rightButtonsStyle}></td>
          <td style={rightButtonsStyle}>{RightButton('A', handleAButton)}</td>
          <td style={rightButtonsStyle}></td>
        </tr>
        <tr>
          <td style={rightButtonsStyle}>{RightButton('B', handleBButton)}</td>
          <td style={rightButtonsStyle}></td>
          <td style={rightButtonsStyle}>{RightButton('C', handleCButton)}</td>
        </tr>
        <tr>
          <td style={rightButtonsStyle}></td>
          <td style={rightButtonsStyle}>{RightButton('D', handleDButton)}</td>
          <td style={rightButtonsStyle}></td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <Stack direction='row' justifyContent='center' alignContent='center'>  
      <div style={{
        padding: '20px 50px 60px 50px',
        backgroundColor: 'lightgreen',
        border: '5px',
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: '15px',
        borderBottomRightRadius: '120px'
      }}>
        <div style={{
          padding: '10px',
          backgroundColor: 'lightgrey',
          border: '10px',
          borderRight: '20px',
          borderLeft: '20px',
          borderColor: 'black',
          borderStyle: 'solid',
          borderRadius: '15px'
        }}>
          <div style={{ width: 'fit-content' }}>
            {props.children}
          </div>
        </div>
        <Stack direction='row' alignContent='center' justifyContent='space-around' gap='5px' sx={{ paddingTop: '25px' }}>
          {dpad}
          {rightButtons}
        </Stack>
        <Stack direction='row' alignContent='center' justifyContent='center' gap='5px' sx={{ paddingTop: '15px' }}>
          <button onClick={handleMenuButton}><Typography>Menu</Typography></button>
          <button onClick={handleStartButton}><Typography>Start</Typography></button>
        </Stack>
      </div>
    </Stack>
  )
}

GameBoi.propTypes = {
  children: PropTypes.element,
  handleUpButton: PropTypes.func,
  handleDownButton: PropTypes.func,
  handleLeftButton: PropTypes.func,
  handleRightButton: PropTypes.func,
  handleAButton: PropTypes.func,
  handleBButton: PropTypes.func,
  handleCButton: PropTypes.func,
  handleDButton: PropTypes.func,
  handleMenuButton: PropTypes.func,
  handleStartButton: PropTypes.func
}
